import React from "react";

export const ItemList = ({ manga }) => {
  return (
    <div>
      <img src={manga.image} className="w-[75px] h-[117px]" />
    </div>
  );
};
