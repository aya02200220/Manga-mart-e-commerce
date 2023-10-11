import React, { useEffect, useState } from "react";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { IconButton } from "@mui/material/";
import { useAppContext } from "../providers/AppContext";
import toast from "react-hot-toast";

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
    const isAlreadyFav = favs.some((fav: Data) => fav.id === mangaData.id);
    if (!isAlreadyFav) {
      toast(`${mangaData.title}\nhas been added to your favorite.`, {
        icon: "♥️",
        style: {
          borderRadius: "10px",
          background: "#e297bb",
          color: "#333",
        },
      });
      favs.push(mangaData);
      localStorage.setItem("favs", JSON.stringify(favs));
      setIsFavored(true);
    } else {
      toast(`${mangaData.title}\nhas been removed from your favorite.`, {
        // icon: "♥️",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
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
