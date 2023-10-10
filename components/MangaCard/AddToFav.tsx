import React from "react";
import { GrFavorite } from "react-icons/gr";
import { IconButton } from "@mui/material/";

interface AddToFavProps {
  mangaData: Data;
  isGoogleLoggedIn: boolean;
  onFavUpdated: () => void;
}

interface Data {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rate?: number;
}

const AddToFav: React.FC<AddToFavProps> = ({
  mangaData,
  isGoogleLoggedIn,
  onFavUpdated,
}) => {
  // console.log("isGoogleLoggedIn::::", isGoogleLoggedIn);

  const handleFavClick = () => {
    console.log("isGoogleLoggedIn:", isGoogleLoggedIn);
    console.log("mangaData:", mangaData);
    if (!isGoogleLoggedIn) return;

    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    const isAlreadyFav = favs.some((fav: Data) => fav.id === mangaData.id);
    if (!isAlreadyFav) {
      favs.push(mangaData);
      localStorage.setItem("favs", JSON.stringify(favs));
    } else {
      const newFavs = favs.filter((fav: Data) => fav.id !== mangaData.id);
      localStorage.setItem("favs", JSON.stringify(newFavs));
    }
    onFavUpdated();
  };

  return (
    <IconButton
      size="small"
      className="absolute top-1 left-1 bg-[#ffffffd4]"
      onClick={handleFavClick}
    >
      <GrFavorite />
    </IconButton>
  );
};

export default AddToFav;
