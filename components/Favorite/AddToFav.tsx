import React, { useEffect, useState } from "react";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { IconButton } from "@mui/material/";
import { useAppContext } from "../providers/AppContext";
import toast from "react-hot-toast";
import FavoriteToast from "../Notifications/FavoriteToast";

import { MangaData } from "@/types";

interface AddToFavProps {
  mangaData: MangaData;
  onFavUpdated: () => void;
}

const AddToFav: React.FC<AddToFavProps> = ({ mangaData, onFavUpdated }) => {
  const [isFavored, setIsFavored] = useState<boolean>(false);
  const { isGoogleLoggedIn, updateFavs } = useAppContext();

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    setIsFavored(favs.some((fav: MangaData) => fav.id === mangaData.id));
  }, [mangaData.id]);

  const handleFavClick = () => {
    if (!isGoogleLoggedIn) {
      toast.success("Please log in to add to your favorites.", {
        style: {
          border: "1px solid #8bb4df",
          padding: "20px",
          color: "#4385cb",
          backgroundColor: "#cbddf1",
        },
        iconTheme: {
          primary: "#4385cb",
          secondary: "#FFFAEE",
        },
      });

      return;
    }

    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    const isAlreadyFav = favs.some((fav: MangaData) => fav.id === mangaData.id);
    if (!isAlreadyFav) {
      toast.custom((t) => (
        <FavoriteToast mangaData={mangaData} actionType="Add" />
      ));
      favs.push(mangaData);
      localStorage.setItem("favs", JSON.stringify(favs));
      setIsFavored(true);
    } else {
      toast.custom((t) => (
        <FavoriteToast mangaData={mangaData} actionType="Remove" />
      ));
      const newFavs = favs.filter((fav: MangaData) => fav.id !== mangaData.id);
      localStorage.setItem("favs", JSON.stringify(newFavs));
      setIsFavored(false);
    }
    updateFavs();
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
