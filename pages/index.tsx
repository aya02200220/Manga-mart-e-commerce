// import Header from "../components/Header/Header";
import Header from "../components/Header/Header";
import { useState } from "react";
import mangaData from "@/data/mangaData";
import Hero from "@/components/Hero/Hero";
import MangaCard from "@/components/MangaCard/MangaCard";
import Cart from "./cart";
import Link from "next/link";

const MainRoot = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("Title");

  // const handleSearch = (term: string, category: string) => {
  //   setSearchTerm(term);
  //   setSearchCategory(category);
  // };

  const handleSearch = (term: string, category: string) => {
    console.log("Handle search in MainRoot:", term, category);
    setSearchTerm(term);
    setSearchCategory(category);
  };

  console.log("searchTerm:", searchTerm);

  return (
    <div>
      <div id="hero">
        <Hero />
      </div>
      <div id="mangaCard">
        <MangaCard
          filteredData={mangaData.filter((manga) => {
            if (searchCategory === "Title") {
              return manga.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            } else if (searchCategory === "Description") {
              return manga.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            } else {
              return false;
            }
          })}
        />
      </div>
      <div id="cart">
        <Cart />
      </div>
    </div>
  );
};

export default MainRoot;
