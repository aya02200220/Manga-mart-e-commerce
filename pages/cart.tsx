import React from "react";
import dynamic from "next/dynamic";
import Cart from "@/components/Cart/Cart";

const index = () => {
  return (
    <div>
      <Cart />
    </div>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
