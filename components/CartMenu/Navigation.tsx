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
      <div className="absolute top-0 left-0  border border-[#333] w-full h-[50px] items-center flex">
        <p className="pl-[10px] font-bold">My Cart ,</p>
        <p className="pl-[10px] font-medium">{cartItemsCounts} item</p>
      </div>
      <motion.ul
        className={`overflow-y-auto  h-[400px]  pl-[15px] pr-[15px] absolute top-[60px] left-0 w-full  ${
          !isOpen ? "closed-menu" : ""
        } `}
        variants={variants}
      >
        {cartItems.map((manga: MangaData, index: number) => (
          <MenuItem manga={manga} index={index} key={index} />
        ))}
      </motion.ul>
      <div className="absolute bottom-0 left-0  border border-[#333] w-full h-[140px] items-center justify-center flex flex-col divide-y-2">
        <div className="flex flex-1  w-full justify-between items-center">
          <p className="pl-[10px] font-bold text-lg">Sub-total</p>
          <p className="pr-[10px] font-medium text-lg">
            $ {cartItemsCounts?.toFixed(2) ?? 0}
          </p>
        </div>
        <div className="flex flex-1 w-full gap-8 justify-center items-center">
          <button className="border border-black py-2 w-[120px]">
            Empty cart
          </button>
          <button className="border border-black py-2 w-[120px]">
            checkout
          </button>
        </div>
      </div>
    </div>
  );
};
