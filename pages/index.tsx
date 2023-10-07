import Home from "./home";
import Header from "../components/Header/Header";
import { useState } from "react";
import mangaData from "@/data/mangaData";
import Hero from "@/components/Hero/Hero";
import MangaCard from "@/components/MangaCard/MangaCard";

const MainRoot = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <div id="header">
        <Header onSearch={handleSearch} />
      </div>
      {/* {console.log(searchTerm)} */}
      <div id="hero">
        <Hero />
      </div>
      <div id="mangaCard">
        <MangaCard
          filteredData={mangaData.filter(
            (manga) =>
              manga.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              manga.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
              manga.description.toLowerCase().includes(searchTerm.toLowerCase())
          )}
        />
      </div>
    </div>
  );
};

export default MainRoot;
