import React, { useEffect, useState } from "react";
import Image from "next/image";
import bg from "../../public/bg-jojo.png";
import bg2 from "../../public/onepice-1.jpg";
import bg3 from "../../public/onepice-2.jpg";
import bg4 from "../../public/onepice-3.jpeg";
import bg5 from "../../public/onepice-4.jpg";
import mangaData from "../../data/mangaData";
import { FcIdea } from "react-icons/fc";
import Modal from "../MangaCard/Modal";

type MangaData = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  rate: number;
  category: string;
};

const getRandomItems = (arr: MangaData[], n: number) => {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [singleData, setSingleData] = useState({});

  const [randomImages, setRandomImages] = useState<MangaData[]>([]);

  useEffect(() => {
    setRandomImages(getRandomItems(mangaData, 3));
  }, []);
  const [randomImage1, randomImage2, randomImage3] = randomImages;

  const handleModalClose = () => {
    setIsOpen(false);
  };

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
  return (
    <div className="flex relative mt-20 mx-2 md:mx-16  h-[200px] md:h-[400px] overflow-hidden justify-center">
      {/* /////////// hero image //////////// */}
      <div className="relative h-[200px] md:h-[400px] w-full md:w-3/5 m-1 ">
        <Image
          layout="fill"
          src={bg2}
          alt="hero"
          objectFit="cover"
          objectPosition="top"
        />
        <div className="absolute inset-0 bg-[#4a4a4a56]">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-2xl font-semibold">
              Welcome to Manga Mart
            </p>
          </div>
        </div>
      </div>
      {/* /////////// ad images //////////// */}
      <div className="hidden md:block h-full w-1/3 m-1 bg-[#e9e9e9]">
        <div className="flex ">
          <div className="flex-1 overflow-hidden hidden md:block">
            <div className="text-xl font-semibold text-center flex justify-center text-[#636363] mt-2">
              <p className="leading-5 text-center items-center justify-center">
                Today's Pick Up
              </p>
              <FcIdea />
            </div>
            <img
              onClick={() => handleModal(randomImage1?.id)}
              className="m-2 slidy cursor-pointer"
              src={randomImage1?.image}
              alt="ad"
              style={{
                width: "97%",
                height: "85%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <div className="hidden md:block">
              <div className="flex-1 overflow-hidden ml-2 m-2 ">
                <img
                  onClick={() => handleModal(randomImage2?.id)}
                  className="slide-up cursor-pointer"
                  src={randomImage2?.image}
                  alt="ad"
                  style={{
                    width: "100%",
                    height: "200%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </div>
              <div className="flex-1 overflow-hidden ml-2 mr-2 mb-4">
                <img
                  onClick={() => handleModal(randomImage3?.id)}
                  className="slide-up cursor-pointer"
                  src={randomImage3?.image}
                  alt="ad"
                  style={{
                    width: "100%",
                    height: "200%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Modal
            isOpen={isOpen}
            onRequestClose={handleModalClose}
            manga={singleData}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
