import * as React from "react";
import { useAppContext } from "../providers/AppContext";
import { ItemList } from "./ItemList";

export const ItemInCart = () => {
  const { cartItemsCounts, cartItems } = useAppContext();

  // 合計金額を計算
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  // cartItemsをtimestampで昇順にソート
  const ascendingCartItems = [...cartItems].sort((a, b) =>
    (a.timestamp ?? "").localeCompare(b.timestamp ?? "")
  );

  return (
    <div className="h-[70vh]">
      <p className="m-1 text-md font-medium">Item In Cart </p>
      <div className="border bg-[#FAFAFA]">
        <div className="px-5 pt-2">
          <div>
            {cartItems.map((item) => {
              const quantity = cartItemsCounts;
              return (
                <ItemList manga={item} quantity={quantity} key={item.id} />
              );
            })}
          </div>
        </div>

        <div className="px-5 pb-3"></div>
      </div>
    </div>
  );
};
