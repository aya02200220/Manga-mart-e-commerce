import React from "react";
import dynamic from "next/dynamic";
import CartMain from "@/components/Cart/CartMain";

const index = () => {
  return (
    <>
      <CartMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
