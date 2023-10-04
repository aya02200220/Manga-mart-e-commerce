import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import mangaData from "../../data/mangaData";
import Image from "next/image";
import { Rating, Button } from "@mui/material/";
import { FaCartArrowDown } from "react-icons/fa";

interface Image {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rate?: number;
}

const MangaCard = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [favArr, setFavArr] = useState<Image[]>([]);

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [data, setData] = useState(mangaData);

  const handleMangaData = (id: number) => {
    const find = mangaData.find((item) => item?.id === id);
    if (find) {
      setSingleData(find);
    }
    setIsOpen(true);
  };

  const handleModal = (id: number) => {
    handleMangaData(id);
  };

  const handleSearch = (text: string) => {
    handleData(text);
    setCategory(text);
  };

  useEffect(() => {
    setCategory("All");
    handleData("All");
  }, []);

  const handleData = (text: string) => {
    if (text === "All") {
      setData(mangaData);
    } else {
      const findData = mangaData.filter((item) => item.category === text);
      setData(findData);
    }
  };

  useEffect(() => {
    setImages(mangaData);
    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavArr(favs);
  }, []);

  const onAddClick = (image: Image) => {
    // ... (logic for adding/removing favorites)
  };

  const categoryColors: { [key: string]: string } = {
    shonen: "#01a4ffc7",
    shoujo: "#e891a0b5",
    seinen: "#3030a9bf",
    josei: "#e85600bf",
  };

  return (
    <>
      <ul className="mt-[0px] flex w-full flex-wrap font-medium pt-6 justify-center ">
        <li
          className={`${
            category === "All" ? "text-[#d54b87]" : "filter-btn "
          } mr-4 md:mx-4`}
          onClick={() => handleSearch("All")}
        >
          All
        </li>
        <li
          className={`${
            category === "shonen" ? "text-[#d54b87]" : "filter-btn"
          } mr-4 md:mx-4`}
          onClick={() => handleSearch("shonen")}
        >
          SHONEN
        </li>
        <li
          className={`${
            category === "shoujo" ? "text-[#d54b87]" : "filter-btn"
          } mr-4 md:mx-4`}
          onClick={() => handleSearch("shoujo")}
        >
          SHOUJO
        </li>
        <li
          className={`${
            category === "seinen" ? "text-[#d54b87]" : "filter-btn ml-0"
          } mr-4 md:mx-4`}
          onClick={() => handleSearch("seinen")}
        >
          SEINEN
        </li>
        <li
          className={`${
            category === "josei" ? "text-[#d54b87]" : "filter-btn ml-0"
          } mr-4 md:mx-4`}
          onClick={() => handleSearch("josei")}
        >
          JOSEI
        </li>
      </ul>

      <div className="flex flex-wrap mx-36 mt-10 justify-center gap-10">
        {data.length > 0 ? (
          data.map((image) => (
            <div
              key={image.id}
              data-aos="fade-up"
              data-aos-duration="700"
              className="flex w-[300px]"
            >
              <div className="w-[140px] flex-shrink-0">
                <img
                  className="h-[210px] w-full object-cover rounded-sm"
                  style={{
                    boxShadow: "10px 8px 10px 1px rgba(0, 0, 0, 0.4)",
                  }}
                  src={image.image}
                  alt={image.title}
                />
              </div>
              <div className="m-4 pl-1 flex-grow flex flex-col justify-between">
                <div className="">
                  <p
                    className="flex justify-center rounded-sm text-white text-[13px]"
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
                    <p>{image.rate?.toFixed(1) ?? 0}</p>
                  </div>

                  <p className="text-[19px] leading-5 mb-3">{image.title}</p>
                  <p>{image.description}</p>
                  <p className="text-[28px] font-extrabold">
                    ${image.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex ">
                  <button
                    onClick={() => onAddClick(image)}
                    className="relative inline-flex items-center justify-center p-4 px-5 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 "
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white  flex items-center">
                      {" "}
                      {favArr.find((fav) => fav.id === image.id) ? (
                        "Remove from Fav"
                      ) : (
                        <>
                          <span>Add to</span>
                          <FaCartArrowDown
                            size={"20px"}
                            className="ml-1"
                          />{" "}
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-3xl">No data</p>
        )}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(MangaCard), { ssr: false });
