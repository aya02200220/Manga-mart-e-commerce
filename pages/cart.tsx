import React from "react";
import dynamic from "next/dynamic";
import Cart from "@/components/Cart/CartModal";

const index = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
