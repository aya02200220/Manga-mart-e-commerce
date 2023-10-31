import React, { useEffect, useState } from "react";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";

import { IconButton } from "@mui/material/";
import { useAppContext } from "../providers/AppContext";
import toast from "react-hot-toast";
import FavoriteToast from "../Notifications/FavoriteToast";

import { MangaData } from "@/types";

interface AddToCartProps {
  mangaData: MangaData;
  onCartUpdated: () => void;
}

const AddToCart: React.FC<AddToCartProps> = ({ mangaData, onCartUpdated }) => {
  const [itemCount, setItemCount] = useState<number>(0);
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const { isGoogleLoggedIn, updateCart, cartItems } = useAppContext();

  useEffect(() => {
    setIsInCart(cartItems.some((item: MangaData) => item.id === mangaData.id));
  }, [mangaData.id, cartItems]);

  useEffect(() => {
    const count = cartItems.filter((item) => item.id === mangaData.id).length;
    setItemCount(count);
  }, [cartItems, mangaData.id]);

  console.log("Add to Cart cartItems:", cartItems);

  const handleAddToCartClick = () => {
    toast.custom((t) => (
      <FavoriteToast mangaData={mangaData} actionType="Add" />
    ));
    cartItems.push(mangaData);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setIsInCart(true);

    setItemCount((prev) => prev + 1);
    onCartUpdated();
    updateCart();
  };

  const handleIncrease = () => {
    cartItems.push(mangaData);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setItemCount((prev) => prev + 1);
    onCartUpdated();
    updateCart();
  };

  const handleDecrease = () => {
    const index = cartItems.findIndex((item) => item.id === mangaData.id);
    if (index !== -1) {
      cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setItemCount((prev) => prev - 1);
      onCartUpdated();
      updateCart();
    }
  };

  return (
    <>
      <div className="relative inline-flex items-center justify-center p-4 px-5 py-1.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
        {itemCount === 0 ? (
          <button onClick={handleAddToCartClick}>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white  flex items-center">
              <>
                <span className="text-sm sm:text-lg">Add to</span>
                <FaCartArrowDown size={"20px"} className="ml-1" />{" "}
              </>
            </span>
          </button>
        ) : (
          <>
            <button onClick={handleDecrease}>-</button>
            <span>{itemCount}</span>
            <button onClick={handleIncrease}>+</button>
          </>
        )}
      </div>
    </>
  );
};

export default AddToCart;
