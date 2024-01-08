import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const DeliveryForm = () => {
  return (
    <div className="m-5">
      <div className="border bg-[#FAFAFA] ">
        <p className="m-3 text-md font-medium">Shipping Option</p>
        <p className="border border-b-0 border-[#333]" />

        <div className="px-5 pt-2">
          <FormControl>
            <RadioGroup
              // aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Standard"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Standard"
                control={<Radio size="small" />}
                label="C$17.99 : Standard Shipping"
              />
              <FormControlLabel
                value="Express"
                control={<Radio size="small" />}
                label="C$28.99 : Express Shipping (1-2 business days)"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="px-5 pb-3"></div>
      </div>
    </div>
  );
};
