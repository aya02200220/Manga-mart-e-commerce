import React, { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { IconButton } from "@mui/material/";
import { useAppContext } from "../providers/AppContext";
import toast from "react-hot-toast";
import CartToast from "../Notifications/CartToast";

import { MangaData } from "@/types";
import { log } from "console";

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

  const handleAddToCartClick = () => {
    setItemCount((prev) => prev + 1);
    toast.custom((t) => <CartToast mangaData={mangaData} actionType="Add" />);
    cartItems.push(mangaData);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setIsInCart(true);

    onCartUpdated();
    updateCart();
  };

  const handleIncrease = () => {
    setItemCount((prev) => prev + 1);
    cartItems.push(mangaData);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    onCartUpdated();
    updateCart();
  };

  const handleDecrease = () => {
    setItemCount((prev) => prev - 1);

    if (itemCount === 1) {
      console.log("toast remove2");

      toast.custom((t) => (
        <CartToast mangaData={mangaData} actionType="Remove" />
      ));
    }

    const index = cartItems.findIndex((item) => item.id === mangaData.id);

    if (index !== -1) {
      cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      onCartUpdated();
      updateCart();
    }
  };

  return (
    <>
      {itemCount === 0 ? (
        <div className="relative inline-flex items-center justify-center p-4 px-5 py-1.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 w-[120px]">
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
        </div>
      ) : (
        <div className="relative inline-flex justify-between items-center overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 w-[120px] h-[40px]">
          <button
            onClick={handleDecrease}
            className="text-white px-3 py-[40px] rounded-l-full
  bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 bg-black hover:bg-[#fff]"
          >
            <AiOutlineMinus />
          </button>
          <span className="px-2 text-[#333] text-lg">{itemCount}</span>
          <button
            onClick={handleIncrease}
            className="bg-black text-white px-3 py-[40px] rounded-r-full
            bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700  hover:bg-[#fff]"
          >
            <AiOutlinePlus />
          </button>
        </div>
      )}
    </>
  );
};

export default AddToCart;
