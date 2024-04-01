import React from "react";
import { MangaData } from "@/types";

interface Props {
  mangaData: MangaData;
  actionType: "Add" | "Remove";
}

const CartToast: React.FC<Props> = ({ mangaData, actionType }) => {
  const bgColor =
    actionType === "Add" ? "bg-[#e3f4ff]" : "bg-[#333] text-white";
  const textColor = actionType === "Add" ? "text-[#333]" : "text-white";

  return (
    <div data-aos="fade-right" data-aos-duration="400">
      <div
        className={`max-w-md w-[100px] md:w-[240px] ${bgColor} shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 items-center `}
      >
        <div className="flex-1 py-2 md:py-6 px-2 md:px-2">
          <div className="flex flex-col md:flex-row items-start ">
            <div className="flex-shrink-0 pt-0.5 pl-3">
              <img
                className="h-20 w-17 "
                src={mangaData.image}
                alt={mangaData.title}
              />
            </div>
            <div className="ml-3 flex-1 leading-3 md:leading-4 mr-2 mt-2 md:mt-0 text-[12px] md:text-[16px]">
              <p className={`text-med font-bold ${textColor}`}>
                {mangaData.title}
              </p>
              <p
                className={`mt-1 md:mt-2 text-sm leading-[10px] md:leading-4 text-[9px] md:text-[12px] ${textColor}`}
              >
                {actionType === "Add"
                  ? "has been added to your cart."
                  : "has been removed from your cart."}
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200"></div>
      </div>
    </div>
  );
};

export default CartToast;
