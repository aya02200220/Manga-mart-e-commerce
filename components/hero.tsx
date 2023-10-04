import React from "react";
import Image from "next/image";
import bg from "../public/bg-jojo.png";
import bg2 from "../public/onepice-1.jpg";
import bg3 from "../public/onepice-2.jpg";
import bg4 from "../public/onepice-3.jpeg";
import bg5 from "../public/onepice-4.jpg";
import mangaData from "../data/mangaData";

const Hero = () => {
  return (
    <div className="relative mt-20 mx-20 h-[400px] overflow-hidden">
      {/* /////////// hero image //////////// */}
      <div className="relative h-[400px] w-2/3">
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
      {/* /////////// add images //////////// */}
      <div className="relative h-[400px] w-1/3"></div>
    </div>
  );
};

export default Hero;
