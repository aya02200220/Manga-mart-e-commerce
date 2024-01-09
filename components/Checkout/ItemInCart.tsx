import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { FaCcPaypal } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";

export const ItemInCart = () => {
  return (
    <div className="h-[70vh]">
      <p className="m-1 text-md font-medium">Item In Cart </p>
      <div className="border bg-[#FAFAFA]">
        <div className="px-5 pt-2"></div>

        <div className="px-5 pb-3"></div>
      </div>
    </div>
  );
};
