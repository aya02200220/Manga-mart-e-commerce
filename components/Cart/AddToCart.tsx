import React, { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useAppContext } from "../providers/AppContext";
import { MangaData } from "@/types";
import { useCartActions } from "../hooks/ useCartActions";

interface AddToCartProps {
  mangaData: MangaData;
  size?: "small" | "medium" | "large";
}

const AddToCart: React.FC<AddToCartProps> = ({
  mangaData,
  size = "medium",
}) => {
  const [itemCount, setItemCount] = useState<number>(0);
  const { updateCart, cartItems } = useAppContext();
  const { handleAddToCart, handleIncrease, handleDecrease } = useCartActions(
    mangaData,
    setItemCount
  );

  const buttonSizeClass =
    size === "large"
      ? "w-[150px] h-[50px]"
      : size === "small"
      ? "w-[76px] h-[30px]"
      : "w-[120px] h-[40px]";

  useEffect(() => {
    const count = cartItems.filter((item) => item.id === mangaData.id).length;
    setItemCount(count);
  }, [cartItems, mangaData.id]);

  return (
    <>
      {itemCount === 0 ? (
        <div
          className={`relative inline-flex items-center justify-center p-4 px-5 py-1.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 ${buttonSizeClass}`}
        >
          <button onClick={handleAddToCart}>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white  flex items-center">
              <>
                {size !== "small" ? (
                  <span className="text-sm sm:text-lg mr-1">Add to</span>
                ) : (
                  <></>
                )}
                <FaCartArrowDown size={"20px"} />{" "}
              </>
            </span>
          </button>
        </div>
      ) : (
        <div
          className={`relative inline-flex justify-between items-center overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500  ${buttonSizeClass}`}
        >
          <button
            onClick={() => handleDecrease(itemCount)}
            className={`text-white  py-[40px] rounded-l-full
            bg-[#546aaa] hover:bg-[#90a1e4] ${
              size === "small" ? "px-1" : "px-3"
            } `}
          >
            <AiOutlineMinus />
          </button>
          <span
            className={`px-2 text-[#333] ${
              size === "small" ? "text-md" : "text-lg"
            }`}
          >
            {itemCount}
          </span>
          <button
            onClick={() => handleIncrease(itemCount)}
            className={`text-white  py-[40px] rounded-r-full
            bg-[#546aaa] hover:bg-[#90a1e4] ${
              size === "small" ? "px-1" : "px-3"
            } `}
          >
            <AiOutlinePlus />
          </button>
        </div>
      )}
    </>
  );
};

export default AddToCart;
