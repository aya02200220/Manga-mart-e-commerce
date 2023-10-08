import React from "react";
import Image from "next/image";
import bg from "../../public/bg-jojo.png";
import bg2 from "../../public/onepice-1.jpg";
import bg3 from "../../public/onepice-2.jpg";
import bg4 from "../../public/onepice-3.jpeg";
import bg5 from "../../public/onepice-4.jpg";
import mangaData from "../../data/mangaData";
import { FcIdea } from "react-icons/fc";

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
  const [randomImage1, randomImage2, randomImage3] = getRandomItems(
    mangaData,
    3
  );

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
      <div className="flex h-full w-1/3 m-1 bg-[#dedddc]">
        <div className="flex-1 overflow-hidden">
          <div className="text-xl font-semibold text-center flex justify-center text-[#636363] mt-2">
            <p>Today's Pick Up</p>
            <FcIdea />
          </div>
          <img
            className=" border border-[#686868] border-1 m-2"
            src={randomImage1.image}
            alt="ad"
            style={{
              width: "100%",
              height: "85%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex-1 overflow-hidden border border-[#686868] border-1 ml-2 m-2">
            <img
              src={randomImage2.image}
              alt="ad"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </div>
          <div className="flex-1 overflow-hidden border border-[#686868] border-1 ml-2 mr-2 mb-4">
            <img
              src={randomImage3.image}
              alt="ad"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
