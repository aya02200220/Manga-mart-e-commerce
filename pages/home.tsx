import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Rating, Button } from "@mui/material/";
import { FaCartArrowDown } from "react-icons/fa";

import Hero from "../components/Hero/Hero";
import MangaCard from "@/components/MangaCard/MangaCard";

const Home = () => {
  return (
    <>
      <Hero />
      <MangaCard />
    </>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
