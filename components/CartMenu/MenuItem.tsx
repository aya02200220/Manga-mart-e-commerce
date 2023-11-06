import * as React from "react";
import { motion } from "framer-motion";
import { MangaData } from "@/types";

interface MenuItemProps {
  manga: MangaData;
  index: number;
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

export const MenuItem: React.FC<MenuItemProps> = ({ manga, index }) => {
  console.log("Cart item in Menu items", manga, "index", index);

  const style = { border: `2px solid ${colors[index]}` };
  return (
    <motion.li
      className="flex "
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="">
        <img src={manga.image} />
      </div>
      <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style} />
    </motion.li>
  );
};
