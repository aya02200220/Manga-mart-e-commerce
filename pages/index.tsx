import Home from "./home";
import Header from "../components/Header/Header";
import { useState } from "react";
import mangaData from "@/data/mangaData";
import Hero from "@/components/Hero/Hero";
import MangaCard from "@/components/MangaCard/MangaCard";

const MainRoot = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("Title");

  const handleSearch = (term: string, category: string) => {
    setSearchTerm(term);
    setSearchCategory(category);
  };

  return (
    <div>
      <div id="header">
        <Header onSearch={handleSearch} />
      </div>
      {console.log(searchTerm)}
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
    </div>
  );
};

export default MainRoot;
