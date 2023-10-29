import React, { useState } from "react";
import MangaCard from "./MangaCard";
import Hero from "./Hero";
import mangaData from "@/data/mangaData";
import Header from "../Header/Header";

const Home = () => {
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
    <>
      <Header onSearch={handleSearch} />
      <Hero />
      <MangaCard
        filteredData={mangaData.filter((manga) => {
          if (searchCategory === "Title") {
            return manga.title.toLowerCase().includes(searchTerm.toLowerCase());
          } else if (searchCategory === "Description") {
            return manga.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          } else {
            return false;
          }
        })}
      />
    </>
  );
};

export default Home;
