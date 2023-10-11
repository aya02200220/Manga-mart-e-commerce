import React, { useEffect, useState } from "react";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { IconButton } from "@mui/material/";
import { useAppContext } from "../providers/AppContext";

interface AddToFavProps {
  mangaData: Data;
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

const AddToFav: React.FC<AddToFavProps> = ({ mangaData, onFavUpdated }) => {
  const [isFavored, setIsFavored] = useState<boolean>(false);
  const { isGoogleLoggedIn } = useAppContext();

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    setIsFavored(favs.some((fav: Data) => fav.id === mangaData.id));
  }, [mangaData.id]);

  const handleFavClick = () => {
    if (!isGoogleLoggedIn) return;

    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    const isAlreadyFav = favs.some((fav: Data) => fav.id === mangaData.id);
    if (!isAlreadyFav) {
      favs.push(mangaData);
      localStorage.setItem("favs", JSON.stringify(favs));
      setIsFavored(true);
    } else {
      const newFavs = favs.filter((fav: Data) => fav.id !== mangaData.id);
      localStorage.setItem("favs", JSON.stringify(newFavs));
      setIsFavored(false);
    }
    onFavUpdated();
  };

  return (
    <IconButton
      size="small"
      className="absolute top-1 left-1 bg-[#ffffffd4]"
      onClick={handleFavClick}
    >
      {isFavored && isGoogleLoggedIn ? (
        <MdFavorite color="#EB1E6C" size="20px" />
      ) : (
        <MdOutlineFavoriteBorder />
      )}
    </IconButton>
  );
};

export default AddToFav;
