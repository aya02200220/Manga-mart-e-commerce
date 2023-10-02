import React from "react";
import bg from "../public/bg-jojo.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative mt-20 mx-20 h-[400px] overflow-hidden">
      <div className="relative h-[400px] w-2/3">
        <Image layout="fill" src={bg} alt="hero" objectFit="cover" />
        <div className="absolute inset-0 bg-[#4a4a4a56]">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-2xl font-semibold">
              Welcome to Manga Mart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
