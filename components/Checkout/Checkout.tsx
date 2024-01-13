import React from "react";
import { Shipping } from "./Shipping";
import Link from "next/link";
import Image from "next/image";

import { IoIosArrowBack } from "react-icons/io";
import Logo from "../../public/Manga.png";

const Checkout = () => {
  return (
    <>
      <div className="m-2 sm:m-5">
        <Link className="fixed" href={"/"}>
          <div className="flex items-center">
            <IoIosArrowBack />
            <p className="font-bold">BACK</p>
          </div>
        </Link>
        <div className="flex items-center justify-center">
          <Image src={Logo} height={50} alt="Manga-mart Logo" />
        </div>
        <Shipping />
      </div>
    </>
  );
};

export default Checkout;
