import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
// import { CartMenu } from "./CartMenu";
import { useAppContext } from "../providers/AppContext";
import { MangaData } from "@/types";

import { EmptyCartDialogModal } from "./EmptyCartDialogModal";
import Link from "next/link";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ isOpen }: { isOpen: boolean }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // ダイアログを開くハンドラ
  const handleEmptyButtonClick = () => {
    setIsDialogOpen(true);
  };

  // ダイアログを閉じるハンドラ
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const { cartItemsCounts, updateCart, cartItems } = useAppContext();

  // アイテムとその数量のマップを作成します。
  const itemsCount = cartItems.reduce<Record<string, number>>((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + 1;
    return acc;
  }, {});

  // 合計金額を計算
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  // cartItemsをtimestampで昇順にソート
  const ascendingCartItems = [...cartItems].sort((a, b) =>
    (a.timestamp ?? "").localeCompare(b.timestamp ?? "")
  );

  // ソートされたアイテムからユニークなアイテムを抽出（最も古いものを残す）
  const uniqueItemsWithEarliestTimestamp = ascendingCartItems.reduce<
    MangaData[]
  >((acc, item) => {
    // 同じIDを持つアイテムがまだ追加されていない場合にのみ追加
    if (!acc.some((i) => i.id === item.id)) {
      acc.push(item);
    }
    return acc;
  }, []);

  const descendingCartItems = [...uniqueItemsWithEarliestTimestamp].sort(
    (a, b) => (b.timestamp ?? "").localeCompare(a.timestamp ?? "")
  );

  return (
    <div className={` ${!isOpen ? "closed-menu" : ""} `}>
      <div className="absolute top-0 left-0 border border-[#333] w-full h-[50px] items-center flex ">
        <p className="pl-[10px] font-bold">My Cart ,</p>
        <p className="pl-[10px] font-medium">{cartItemsCounts} item</p>
      </div>

      <motion.ul
        className={`overflow-y-auto h-[83%] sm:h-[320px]  pl-[20px] pr-[20px] absolute top-[55px] pt-10 sm:pt-1 left-0 w-full items-start sm:items-center flex  ${
          !isOpen ? "closed-menu" : ""
        } `}
        variants={variants}
      >
        {descendingCartItems.length > 0 ? (
          descendingCartItems.map((item) => {
            const quantity = itemsCount[item.id];
            return <MenuItem manga={item} quantity={quantity} key={item.id} />;
          })
        ) : (
          <div className="text-center ">
            <video
              autoPlay
              loop
              muted
              className="w-full h-auto max-h-[60vh] p-6"
            >
              <source src="/NoItem-Pop.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </motion.ul>
      <div className="absolute bottom-0 left-0  border border-[#333] w-full h-[110px] items-center justify-center flex flex-col divide-y-2">
        <div className="flex flex-1  w-full justify-between items-center bg-white">
          <p className="pl-[20px] font-bold text-md">Sub-total</p>
          <p className="pr-[20px] font-medium text-md">
            $ {total?.toFixed(2) ?? 0}
          </p>
        </div>
        <div className="flex flex-1 w-full gap-4 justify-center items-center bg-white">
          <button
            onClick={handleEmptyButtonClick}
            className="py-1 w-[120px] bg-[#c56c6c] hover:bg-[#dd7e7e] text-[#fff] rounded-md transition duration-300 ease-in-out"
          >
            Empty cart
          </button>
          <Link href={"/checkout"}>
            <button className="py-1 w-[120px] bg-[#537aa2] hover:bg-[#62b2c2] text-[#fff] rounded-md transition duration-300 ease-in-out">
              Checkout
            </button>
          </Link>
        </div>
      </div>
      <EmptyCartDialogModal open={isDialogOpen} onClose={handleCloseDialog} />
    </div>
  );
};
