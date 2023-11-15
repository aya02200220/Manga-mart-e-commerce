import React, { useEffect, useState } from "react";
import Image from "next/image";
import bg2 from "../../public/onepice-1.jpg";
import bg10 from "../../public/22395020.jpg";
import logo from "../../public/today.png";
import mangaData from "../../data/mangaData";
import Modal from "./Modal";
import HeroLogo from "./HeroLogo";

import { MangaData } from "@/types";

const getRandomItems = (arr: MangaData[], n: number) => {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [singleData, setSingleData] = useState<MangaData | null>(null);

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
    <div className="flex relative mt-20 mx-2 h-[200px] md:h-[400px] overflow-hidden justify-center">
      {/* /////////// hero image //////////// */}
      <div className="relative h-[200px] md:h-[400px] w-full md:w-3/5 m-1 ">
        <Image
          fill={true}
          src={bg2}
          alt="hero"
          objectFit="cover"
          objectPosition="top"
        />
        <div className="absolute inset-0 bg-[#4a4a4a56]">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-2xl font-semibold">
              <HeroLogo />
            </p>
          </div>
        </div>
      </div>
      {/* /////////// ad images //////////// */}
      <div className="relative hidden md:block w-1/3 m-1 overflow-hidden max-w-[720px]">
        {/* <Image
          fill={true}
          src={bg10}
          alt="background"
          object-fit="cover"
          objectPosition="center"
          className="z-0"
        /> */}

        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover object-top"
        >
          <source src="/Pickup-bg-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full z-1 flex flex-col justify-between">
          {/* <div className="text-xl font-semibold text-center flex justify-center content-center my-1">
            <Image
              src={logo}
              alt="Today's Pick Up"
              width={150}
              height={90}
            />
          </div> */}
          <div className="flex slid-images horizontal justify-center items-center h-full pt-[70px]">
            {[
              randomImage1,
              randomImage2,
              randomImage3,
              randomImage1,
              randomImage2,
              randomImage3,
              randomImage1,
              randomImage2,
              randomImage3,
            ].map((image, index) => (
              <img
                key={index}
                onClick={() => handleModal(image?.id)}
                className="cursor-pointer m-1 mx-3 h-full"
                src={image?.image}
                alt="ad"
                style={{
                  width: "auto",
                  height: "300px",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-50">
        <Modal
          isOpen={isOpen}
          onRequestClose={handleModalClose}
          mangaData={singleData}
        />
      </div>
    </div>
  );
};

export default Hero;
