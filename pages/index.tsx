// import Header from "../components/Header/Header";
import { useState } from "react";
import Home from "@/components/Home/Home";
import Cart from "./checkout";
import Header from "@/components/Header/Header";

const MainRoot = () => {
  return (
    <div>
      {/* <Header /> */}
      <Home />
      {/* <Cart /> */}
    </div>
  );
};

export default MainRoot;
