import * as React from "react";
import { motion } from "framer-motion";
import { MangaData } from "@/types";
import { useAppContext } from "../providers/AppContext";
import { ImBin } from "react-icons/im";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface MenuItemProps {
  manga: MangaData;
  quantity: number;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem: React.FC<MenuItemProps> = ({ manga, quantity }) => {
  const handleIncrement = (id) => {
    // アイテムの数量を増やすロジック
  };

  const handleDecrement = (id) => {
    // アイテムの数量を減らすロジック、ただし数量が1より大きい場合のみ
  };

  const handleRemove = (id) => {
    // アイテムをリストから削除するロジック
  };

  return (
    <motion.li
      className="flex  border-b border-b-1"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex gap-3 w-full pt-2">
        <img src={manga.image} className="w-[75px] h-[117px]" />
        <div className="flex-grow flex flex-col justify-between py-3">
          <p className="text-sm leading-[14px]">{manga.title}</p>
          <p className="pt-2 text-lg font-semibold">
            $ {manga.price.toFixed(2) ?? 0}
          </p>

          <div className="flex items-center mt-2">
            <button
              className="w-[27px] h-[27px] px-2 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
              onClick={() => handleDecrement(manga.id)}
            >
              <AiOutlineMinus size="12px" />
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="w-[27px] h-[27px] px-2 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
              onClick={() => handleIncrement(manga.id)}
            >
              <AiOutlinePlus size="12px" />
            </button>
          </div>
        </div>
        <button
          className="mt-2 w-[30px] h-[30px] flex ml-4 px-2 py-1 text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-white"
          onClick={() => handleRemove(manga.id)}
        >
          <ImBin />
        </button>
      </div>
    </motion.li>
  );
};
