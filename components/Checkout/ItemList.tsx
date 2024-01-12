import React from "react";
import { MangaData } from "@/types";

interface MenuItemProps {
  manga: MangaData;
  quantity: number;
}

export const ItemList: React.FC<MenuItemProps> = ({ manga }) => {
  return (
    <div className="flex mb-2">
      <img src={manga.image} className="w-[50px] h-[70px]" />
      <div className="flex flex-col pl-2">
        <p className="text-[12px] leading-3 pb-2">{manga.title}</p>
        <p className="text-[11px]">${manga.price.toFixed(2)}</p>
      </div>
    </div>
  );
};
