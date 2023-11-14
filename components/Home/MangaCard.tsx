import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Rating, Button, IconButton } from "@mui/material/";
import { FaCartArrowDown } from "react-icons/fa";

import AddToFav from "../Favorite/AddToFav";
import AddToCart from "../Cart/AddToCart";
import CategoryFilter from "./CategoryFilter";
import Modal from "./Modal";
import { log } from "console";

import { MangaData } from "@/types";
import { useAppContext } from "../providers/AppContext";

interface MangaCardProps {
  filteredData: MangaData[];
}

const MangaCard: React.FC<MangaCardProps> = ({ filteredData }) => {
  const [mangaData, setMangaData] = useState<MangaData[]>([]);

  const [singleData, setSingleData] = useState<MangaData | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [data, setData] = useState(filteredData);

  useEffect(() => {
    setCategory("All");
    handleData("All");
  }, []);

  useEffect(() => {
    handleData(category);
  }, [filteredData, category]);

  const handleMangaData = (id: number) => {
    const find = filteredData.find((item) => item?.id === id);
    if (find) {
      setSingleData(find);
    }
    setIsOpen(true);
  };

  const handleModal = (id: number) => {
    handleMangaData(id);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleSearch = (text: string) => {
    handleData(text);
    setCategory(text);
  };

  const handleData = (text: string) => {
    let targetData = filteredData;

    if (text !== "All") {
      targetData = filteredData.filter((item) => item.category === text);
    }

    // レート順にデータをソート
    const sortedData = [...targetData].sort(
      (a, b) => (b.rate ?? 0) - (a.rate ?? 0)
    );
    setData(sortedData);
  };

  useEffect(() => {
    setMangaData(filteredData);
  }, []);

  const categoryColors: { [key: string]: string } = {
    shonen: "#01a4ffc7",
    shoujo: "#e891a0b5",
    seinen: "#3030a9bf",
    josei: "#e85600bf",
  };

  return (
    <>
      <CategoryFilter
        activeCategory={category}
        onCategorySelect={handleSearch}
      />
      <div className="flex flex-wrap mx-2 sm:mx-2 md:mx-5 lg:mx-32 mt-10 justify-center gap-4 sm:gap-7">
        {data.length > 0 ? (
          data.map((manga) => (
            <div
              key={manga.id}
              data-aos="fade-up"
              data-aos-duration="700"
              className="flex w-[220px] sm:w-[300px] h-[160px] sm:h-[210px] mb-2"
            >
              <div className="w-[100px] sm:w-[130px] flex-shrink-0 relative">
                <div className="absolute top-1 left-1 bg-[#ffffffd4] rounded-full">
                  <AddToFav mangaData={manga} />
                </div>
                <img
                  onClick={() => handleModal(manga?.id)}
                  className="h-[160px] sm:h-[210px] w-[100px] sm:w-full object-cover rounded-sm cursor-pointer"
                  style={{
                    boxShadow: "10px 8px 10px 1px rgba(0, 0, 0, 0.4)",
                  }}
                  src={manga.image}
                  alt={manga.title}
                />
              </div>
              <div className="m-1 sm:m-4 pl-1 flex-grow flex flex-col justify-between">
                <div className="">
                  <p
                    className="flex justify-center rounded-sm text-white text-[10px] sm:text-[13px]"
                    style={{
                      backgroundColor:
                        categoryColors[manga.category] || "#817db9",
                    }}
                  >
                    {manga.category.toUpperCase()}
                  </p>
                  <div className="flex items-center mb-2">
                    <Rating
                      name="half-rating-read"
                      defaultValue={manga.rate ?? 0}
                      precision={0.1}
                      readOnly
                      size="small"
                    />
                    <p className="text-sm sm:text-[16px]">
                      {manga.rate?.toFixed(1) ?? 0}
                    </p>
                  </div>

                  <p className="text-md sm:text-[19px] leading-5 mb-1 sm:mb-3 ">
                    {manga.title}
                  </p>
                  <p className="text-2xl sm:text-[28px] font-extrabold">
                    ${manga.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex ">
                  <AddToCart mangaData={manga} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-3xl h-[400px]">No data</p>
        )}
        <div className="relative">
          <Modal
            isOpen={isOpen}
            onRequestClose={handleModalClose}
            mangaData={singleData}
          />
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(MangaCard), { ssr: false });
