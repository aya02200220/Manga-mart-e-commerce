import * as React from "react";
import { motion } from "framer-motion";
import { MangaData } from "@/types";
import { useAppContext } from "../providers/AppContext";

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
  const { onCartUpdated } = useAppContext;

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
      className="flex mb-2 pb-2 border-b border-b-1"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex gap-3">
        <img src={manga.image} className="w-[75px] " />
        <div>
          <p>{manga.title}</p>
          <p>$ {manga.price}</p>

          <div className="flex items-center mt-2">
            <button
              className="px-2 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
              onClick={() => handleDecrement(manga.id)}
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="px-2 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
              onClick={() => handleIncrement(manga.id)}
            >
              +
            </button>
          </div>
        </div>
        <button
          className="ml-4 px-2 py-1 text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-white"
          onClick={() => handleRemove(manga.id)}
        >
          Remove
        </button>
      </div>
    </motion.li>
  );
};
