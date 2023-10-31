import React, { useEffect, useState } from "react";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { IconButton } from "@mui/material/";
import { useAppContext } from "../providers/AppContext";
import toast from "react-hot-toast";
import FavoriteToast from "../Notifications/FavoriteToast";

import { MangaData } from "@/types";

interface AddToCartProps {
  mangaData: MangaData;
  onFavUpdated: () => void;
}

const AddToCart: React.FC<AddToCartProps> = ({ mangaData, onFavUpdated }) => {
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const { isGoogleLoggedIn, updateCart, cartItems } = useAppContext();

  useEffect(() => {
    setIsInCart(favItems.some((fav: MangaData) => fav.id === mangaData.id));
  }, [mangaData.id, favItems]);

  // console.log("Add to Fav favItems:", favItems);

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

    const isAlreadyFav = favItems.some(
      (fav: MangaData) => fav.id === mangaData.id
    );
    if (!isAlreadyFav) {
      toast.custom((t) => (
        <FavoriteToast mangaData={mangaData} actionType="Add" />
      ));
      favItems.push(mangaData);
      localStorage.setItem("favs", JSON.stringify(favItems));
      setIsInCart(true);
    } else {
      toast.custom((t) => (
        <FavoriteToast mangaData={mangaData} actionType="Remove" />
      ));
      const newFavs = favItems.filter(
        (fav: MangaData) => fav.id !== mangaData.id
      );
      localStorage.setItem("favs", JSON.stringify(newFavs));
      setIsInCart(false);
    }

    onFavUpdated();
    updateFavs();
  };

  return (
    <IconButton
      size="small"
      className="absolute top-1 left-1 bg-[#ffffffd4]"
      onClick={handleFavClick}
    >
      {isInCart && isGoogleLoggedIn ? (
        <MdFavorite color="#EB1E6C" size="20px" />
      ) : (
        <MdOutlineFavoriteBorder />
      )}
    </IconButton>
  );
};

export default AddToCart;
