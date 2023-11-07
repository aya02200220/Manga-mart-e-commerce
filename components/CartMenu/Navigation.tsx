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
  const { updateFavs, updateCart, cartItems } = useAppContext();

  return (
    <div>
      {" "}
      <div
        className={`absolute  top-[36px] left-[-100px]  border border-[#333]  ${
          !isOpen ? "closed-menu" : ""
        } `}
      >
        <p>My Cart</p>
      </div>
      <motion.ul
        className={`overflow-y-auto  h-[400px]  p-[15px] absolute top-[75px] right-[-50px] w-[240px]  ${
          !isOpen ? "closed-menu" : ""
        } `}
        variants={variants}
      >
        {cartItems.map((manga: MangaData, index: number) => (
          <MenuItem manga={manga} index={index} key={index} />
        ))}
      </motion.ul>
    </div>
  );
};
