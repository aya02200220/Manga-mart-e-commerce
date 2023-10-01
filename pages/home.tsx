import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import mangaData from "../data/mangaData";
import Image from "next/image";
import { Rating, Button } from "@mui/material/";
import { FaCartArrowDown } from "react-icons/fa";

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
    <div className="flex flex-wrap mx-30 my-20 justify-center gap-6">
      {images.map((image) => (
        <div key={image.id} className="flex w-[350px]">
          <div className="w-[180px] flex-shrink-0">
            <img
              className="h-[270px] w-full object-cover rounded-sm"
              style={{
                boxShadow: "10px 8px 10px 1px rgba(0, 0, 0, 0.4)",
              }}
              src={image.image}
              alt={image.title}
            />
          </div>
          <div className="m-4 flex-grow flex flex-col justify-between">
            <div className="">
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.1}
                readOnly
                size="small"
              />

              <p className="text-[20px]">{image.title}</p>
              <p>{image.description}</p>
              <p className="text-2xl font-extrabold ">
                ${image.price.toFixed(2)}
              </p>
            </div>

            <div>
              <button
                onClick={() => onAddClick(image)}
                className="relative px-6 py-3 font-bold text-[#3d3d3d] group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 -translate-y-2 bg-[#d987ac] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-[#444]"></span>
                <span className="relative flex items-center">
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
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
