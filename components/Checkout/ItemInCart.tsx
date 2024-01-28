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
    <>
      <div className="h-[70vh] flex flex-col justify-between">
        <div className="m-1 pb-1 leading-4 flex items-center">
          <p className="text-md font-medium leading-4 mr-4">Item In Cart</p>
          <p>
            <span className="font-bold px-1 text-[17px]">
              {cartItemsCounts}
            </span>{" "}
            items
          </p>
        </div>
        <div className="border bg-[#FAFAFA] overflow-y-auto h-[70%]">
          <div className="px-2 pt-2 ">
            <div>
              {cartItems.map((item) => {
                const quantity = cartItemsCounts;
                return (
                  <ItemList manga={item} quantity={quantity} key={item.id} />
                );
              })}
            </div>
          </div>
        </div>
        <div className="m-1 mt-4 text-md font-medium min-h-[50px]">
          <div className="flex flex-col gap-1 md:gap-2">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>C${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>C${(total * 0.12).toFixed(2)}</p>
            </div>

            <hr />
            <div className="flex justify-between items-center">
              <p className="font-semibold mr-2 leading-4">Order Total</p>
              <p className="font-semibold">
                C${(total + total * 0.12).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button>button</button>
      <button>button</button>
    </>
  );
};
