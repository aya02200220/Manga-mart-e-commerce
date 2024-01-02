import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import {
  CountryField,
  StateField,
  VisitorAPIComponents,
} from "react-country-state-fields";
import { OutlinedInput, TextField } from "@mui/material";

interface IconProps {
  id: number;
  open: number;
}
interface Country {
  code: string;
  label: string;
}

interface State {
  code: string;
  label: string;
}

function Icon({ id, open }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export const Shipping = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="border border-black w-[600px] m-10 h-auto">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          className="p-3 font-medium text-md"
          onClick={() => handleOpen(1)}
        >
          01 Shipping
        </AccordionHeader>
        <AccordionBody>
          <ShippingForm />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export const ShippingForm = () => {
  const visitorApiProjectId = ""; // assign your project ID her
  const [country, setCountry] = useState<Country>({ code: "", label: "" });
  const [state, setState] = useState<State>({ code: "", label: "" });

  return (
    <div>
      <div className="m-5">
        <div className="border">
          <p className="m-3">Shipping address</p>
          <p className="border border-b-4" />

          <div className="flex gap-2 p-4">
            <TextField
              label="First Name"
              variant="filled"
              required
              size="small"
            />
            <TextField
              label="Last Name"
              variant="filled"
              required
              size="small"
            />
          </div>
          <p>test</p>
          <VisitorAPIComponents
            projectId={visitorApiProjectId}
            handleCountryChange={(countryObj: Country) =>
              setCountry(countryObj)
            }
            handleStateChange={(stateObj: State) => setState(stateObj)}
          >
            <CountryField label="Country/Territory"></CountryField>
            <StateField label="State/Province"></StateField>
          </VisitorAPIComponents>

          <hr />
          <hr />
          <hr />
        </div>
      </div>
    </div>
  );
};
