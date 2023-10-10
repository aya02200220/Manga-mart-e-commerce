import React, { useEffect, useState } from "react";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
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
  const [isFavored, setIsFavored] = useState<boolean>(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    setIsFavored(favs.some((fav: Data) => fav.id === mangaData.id));
  }, [mangaData.id]);

  const handleFavClick = () => {
    console.log("isGoogleLoggedIn:", isGoogleLoggedIn);
    console.log("mangaData:", mangaData);
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
