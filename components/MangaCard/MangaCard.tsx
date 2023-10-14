import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Rating, Button, IconButton } from "@mui/material/";
import { FaCartArrowDown } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";

import mangaData from "../../data/mangaData";

import AddToFav from "../Favorite/AddToFav";
import CategoryFilter from "./CategoryFilter";
import Modal from "./Modal";
import { log } from "console";

import { MangaData } from "@/types";

interface MangaCardProps {
  filteredData: MangaData[];
}

const MangaCard: React.FC<MangaCardProps> = ({ filteredData }) => {
  const [images, setImages] = useState<MangaData[]>([]);
  const [favArr, setFavArr] = useState<MangaData[]>([]);

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
    const sortedData = [...targetData].sort((a, b) => b.rate - a.rate);
    setData(sortedData);
  };

  useEffect(() => {
    setImages(filteredData);
    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavArr(favs);
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
          data.map((image) => (
            <div
              key={image.id}
              data-aos="fade-up"
              data-aos-duration="700"
              className="flex w-[220px] sm:w-[300px] mb-2"
            >
              <div className="w-[100px] sm:w-[130px] flex-shrink-0 relative">
                <AddToFav
                  mangaData={image}
                  onFavUpdated={() => {
                    const updatedFavs = JSON.parse(
                      localStorage.getItem("favs") || "[]"
                    );
                    setFavArr(updatedFavs);
                  }}
                />
                <img
                  onClick={() => handleModal(image?.id)}
                  className="h-[160px] sm:h-[210px] w-[100px] sm:w-full object-cover rounded-sm cursor-pointer"
                  style={{
                    boxShadow: "10px 8px 10px 1px rgba(0, 0, 0, 0.4)",
                  }}
                  src={image.image}
                  alt={image.title}
                />
              </div>
              <div className="m-1 sm:m-4 pl-1 flex-grow flex flex-col justify-between">
                <div className="">
                  <p
                    className="flex justify-center rounded-sm text-white text-[10px] sm:text-[13px]"
                    style={{
                      backgroundColor:
                        categoryColors[image.category] || "#817db9",
                    }}
                  >
                    {image.category.toUpperCase()}
                  </p>
                  <div className="flex items-center mb-2">
                    <Rating
                      name="half-rating-read"
                      defaultValue={image.rate ?? 0}
                      precision={0.1}
                      readOnly
                      size="small"
                    />
                    <p className="text-sm sm:text-[16px]">
                      {image.rate?.toFixed(1) ?? 0}
                    </p>
                  </div>

                  <p className="text-md sm:text-[19px] leading-5 mb-1 sm:mb-3 ">
                    {image.title}
                  </p>
                  <p className="text-2xl sm:text-[28px] font-extrabold">
                    ${image.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex ">
                  <button
                    // onClick={() => addToCart(image)}
                    className="relative inline-flex items-center justify-center p-4 px-5 py-1.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 "
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white  flex items-center">
                      <>
                        <span className="text-sm sm:text-lg">Add to</span>
                        <FaCartArrowDown size={"20px"} className="ml-1" />{" "}
                      </>
                      )
                    </span>
                  </button>
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
            manga={singleData}
          />
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(MangaCard), { ssr: false });
