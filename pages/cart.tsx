import React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header/Header2";
import Cart from "@/components/Cart/Cart";

const index = () => {
  return (
    <div>
      <Header />
      <Cart />
    </div>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
