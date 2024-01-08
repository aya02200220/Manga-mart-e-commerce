import React, { useState } from "react";
import {
  CountryField,
  StateField,
  VisitorAPIComponents,
} from "react-country-state-fields";
import { OutlinedInput, TextField } from "@mui/material";

interface Country {
  code: string;
  label: string;
}

interface State {
  code: string;
  label: string;
}

export const ShippingForm = () => {
  const visitorApiProjectId = ""; // assign your project ID her
  const [country, setCountry] = useState<Country>({ code: "", label: "" });
  const [state, setState] = useState<State>({ code: "", label: "" });

  return (
    <div>
      <div className="m-5">
        <div className="border bg-[#FAFAFA] ">
          <p className="m-3 text-md font-medium">Shipping address</p>
          <p className="border border-b-0 border-[#333]" />

          <div className="px-5 pb-3">
            <div className="flex flex-col sm:flex-row gap-2 pb-2 pt-4">
              <TextField
                label="First Name"
                fullWidth
                required
                size="small"
                className="bg-white mb-2"
              />
              <TextField
                label="Last Name"
                fullWidth
                required
                size="small"
                className="bg-white mb-2 font-light"
              />
            </div>
            <div className="flex flex-col gap-2 pb-2">
              <VisitorAPIComponents
                projectId={visitorApiProjectId}
                handleCountryChange={(countryObj: Country) =>
                  setCountry(countryObj)
                }
                handleStateChange={(stateObj: State) => setState(stateObj)}
              >
                <CountryField
                  className="bg-white"
                  label="Country/Territory"
                ></CountryField>
                {/* <StateField label="State/Province"></StateField> */}
              </VisitorAPIComponents>

              <TextField
                fullWidth
                label="Street Address"
                required
                size="small"
                className="bg-white mb-2"
              />
              <div className="flex gap-2">
                <TextField
                  fullWidth
                  label="Apt/Unit"
                  size="small"
                  className="bg-white mb-2"
                />
                <TextField
                  fullWidth
                  label="City"
                  required
                  size="small"
                  className="bg-white mb-2"
                />
              </div>
              <div className="flex gap-2">
                <TextField
                  fullWidth
                  label="Province"
                  size="small"
                  className="bg-white mb-2"
                />
                <TextField
                  fullWidth
                  label="Postal Code"
                  required
                  size="small"
                  className="bg-white mb-2"
                />
              </div>
              <TextField
                fullWidth
                label="Phone Number"
                required
                size="small"
                className="bg-white mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
