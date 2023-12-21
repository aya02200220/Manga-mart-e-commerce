import React from "react";
import dynamic from "next/dynamic";
import Checkout from "@/components/Checkout/Checkout";

const index = () => {
  return (
    <>
      <Checkout />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
