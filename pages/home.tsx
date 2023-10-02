import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import mangaData from "../data/mangaData";
import Image from "next/image";
import { Rating, Button } from "@mui/material/";
import { FaCartArrowDown } from "react-icons/fa";

import Hero from "../components/hero";

interface Image {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const Home = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [favArr, setFavArr] = useState<Image[]>([]);

  useEffect(() => {
    setImages(mangaData);
    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavArr(favs);
  }, []);

  const onAddClick = (image: Image) => {
    // ... (logic for adding/removing favorites)
  };

  return (
    <>
      <Hero />
      <div className="flex flex-wrap mx-40 mt-10 justify-center gap-10">
        {images.map((image) => (
          <div key={image.id} className="flex w-[320px]">
            <div className="w-[155px] flex-shrink-0">
              <img
                className="h-[250px] w-full object-cover rounded-sm"
                style={{
                  boxShadow: "10px 8px 10px 1px rgba(0, 0, 0, 0.4)",
                }}
                src={image.image}
                alt={image.title}
              />
            </div>
            <div className="m-4 pl-1 flex-grow flex flex-col justify-between">
              <div className="">
                <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.1}
                  readOnly
                  size="small"
                />

                <p className="text-[19px] leading-5 mb-3">{image.title}</p>
                <p>{image.description}</p>
                <p className="text-[28px] font-extrabold">
                  ${image.price.toFixed(2)}
                </p>
              </div>

              <div className="flex ">
                <button
                  onClick={() => onAddClick(image)}
                  className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 "
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
                        <FaCartArrowDown size={"20px"} className="ml-1" />{" "}
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
