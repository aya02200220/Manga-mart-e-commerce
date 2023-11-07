import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
// import { CartMenu } from "./CartMenu";
import { useAppContext } from "../providers/AppContext";
import { MangaData } from "@/types";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ isOpen }: { isOpen: boolean }) => {
  const { cartItemsCounts, updateCart, cartItems } = useAppContext();

  return (
    <div className={` ${!isOpen ? "closed-menu" : ""} `}>
      <div className="absolute top-[36px] left-[-196px]  border border-[#333] w-[300px] h-[50px] items-center flex">
        <p className="pl-[10px] font-bold">My Cart ,</p>
        <p className="pl-[10px] font-medium">{cartItemsCounts} item</p>
      </div>
      <motion.ul
        className={`overflow-y-auto  h-[400px]  p-[15px] absolute top-[88px] right-[-50px] w-[240px]  ${
          !isOpen ? "closed-menu" : ""
        } `}
        variants={variants}
      >
        {cartItems.map((manga: MangaData, index: number) => (
          <MenuItem manga={manga} index={index} key={index} />
        ))}
      </motion.ul>
      <div className="absolute  top-[486px] left-[-196px]  border border-[#333] w-[300px] h-[50px] items-center flex justify-between">
        <p className="pl-[10px] font-bold">Sub-total</p>
        <p className="pr-[10px] font-medium">
          $ {cartItemsCounts?.toFixed(2) ?? 0}
        </p>
      </div>
    </div>
  );
};
