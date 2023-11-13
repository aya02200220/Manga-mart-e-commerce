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

  // アイテムとその数量のマップを作成します。
  const itemsCount = cartItems.reduce<Record<string, number>>((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + 1;
    return acc;
  }, {});

  // 合計金額を計算
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  // cartItemsをtimestampで逆順にソート
  const sortedCartItems = [...cartItems].sort((a, b) =>
    (b.timestamp ?? "").localeCompare(a.timestamp ?? "")
  );

  // ソートされたアイテムからユニークなアイテムのみを抽出
  const uniqueItemsWithLatestTimestamp = sortedCartItems.reduce<MangaData[]>(
    (acc, item) => {
      // すでに同じIDを持つアイテムが配列に存在しない場合にのみ追加
      if (!acc.find((i) => i.id === item.id)) {
        acc.push(item);
      }
      return acc;
    },
    []
  );

  return (
    <div className={` ${!isOpen ? "closed-menu" : ""} `}>
      <div className="absolute top-0 left-0  border border-[#333] w-full h-[50px] items-center flex">
        <p className="pl-[10px] font-bold">My Cart ,</p>
        <p className="pl-[10px] font-medium">{cartItemsCounts} item</p>
      </div>

      <motion.ul
        className={`overflow-y-auto  h-[320px]  pl-[20px] pr-[20px] absolute top-[55px] pt-1 left-0 w-full  ${
          !isOpen ? "closed-menu" : ""
        } `}
        variants={variants}
      >
        {uniqueItemsWithLatestTimestamp.length > 0 ? (
          uniqueItemsWithLatestTimestamp.map((item) => {
            const quantity = itemsCount[item.id];
            return <MenuItem manga={item} quantity={quantity} key={item.id} />;
          })
        ) : (
          <div className="text-center">
            <video autoPlay loop muted className="w-full h-auto pt-6">
              <source src="/NoItem-Pop.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </motion.ul>
      <div className="absolute bottom-0 left-0  border border-[#333] w-full h-[110px] items-center justify-center flex flex-col divide-y-2">
        <div className="flex flex-1  w-full justify-between items-center">
          <p className="pl-[20px] font-bold text-md">Sub-total</p>
          <p className="pr-[20px] font-medium text-md">
            $ {total?.toFixed(2) ?? 0}
          </p>
        </div>
        <div className="flex flex-1 w-full gap-4 justify-center items-center">
          <button className="border border-black py-1 w-[120px]">
            Empty cart
          </button>
          <button className="border border-black py-1 w-[120px]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
