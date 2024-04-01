import React, { useEffect, useState } from "react";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { IconButton } from "@mui/material/";
import { useAppContext } from "../providers/AppContext";
import toast from "react-hot-toast";
import FavoriteToast from "../Notifications/FavoriteToast";

import { MangaData } from "@/types";

interface AddToFavProps {
  mangaData: MangaData;
}

const AddToFav: React.FC<AddToFavProps> = ({ mangaData }) => {
  const [isFavored, setIsFavored] = useState<boolean>(false);
  const { isGoogleLoggedIn, updateFavs, favItems } = useAppContext();

  useEffect(() => {
    setIsFavored(favItems.some((fav: MangaData) => fav.id === mangaData.id));
  }, [mangaData.id, favItems]);

  // console.log("Add to Fav favItems:", favItems);

  const handleFavClick = () => {
    // if (!isGoogleLoggedIn) {
    //   toast.success("Please log in to add to your favorites.", {
    //     style: {
    //       border: "1px solid #8bb4df",
    //       padding: "20px",
    //       color: "#4385cb",
    //       backgroundColor: "#cbddf1",
    //     },
    //     iconTheme: {
    //       primary: "#4385cb",
    //       secondary: "#FFFAEE",
    //     },
    //   });

    //   return;
    // }

    const isAlreadyFav = favItems.some(
      (fav: MangaData) => fav.id === mangaData.id
    );

    if (!isAlreadyFav) {
      toast.custom(
        (t) => <FavoriteToast mangaData={mangaData} actionType="Add" />,
        { duration: 250 }
      );
      favItems.push(mangaData);
      localStorage.setItem("favs", JSON.stringify(favItems));
      setIsFavored(true);
    } else {
      toast.custom(
        (t) => <FavoriteToast mangaData={mangaData} actionType="Remove" />,
        { duration: 250 }
      );
      const newFavs = favItems.filter(
        (fav: MangaData) => fav.id !== mangaData.id
      );
      localStorage.setItem("favs", JSON.stringify(newFavs));
      setIsFavored(false);
    }

    updateFavs();
  };

  return (
    // <IconButton size="small" onClick={handleFavClick}>
    //   {isFavored && isGoogleLoggedIn ? (
    //     <MdFavorite color="#EB1E6C" size="20px" />
    //   ) : (
    //     <MdOutlineFavoriteBorder />
    //   )}
    // </IconButton>
    <IconButton size="small" onClick={handleFavClick}>
      {isFavored ? (
        <MdFavorite color="#EB1E6C" size="20px" />
      ) : (
        <MdOutlineFavoriteBorder />
      )}
    </IconButton>
  );
};

export default AddToFav;
