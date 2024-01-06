import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { ShippingForm } from "./ShippingForm";
import { DeliveryForm } from "./DeliveryForm";

interface IconProps {
  id: number;
  open: number;
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
    <div className="flex m-10 gap-4">
      <div className=" w-auto sm:w-2/3 h-auto bg-white">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            className="p-3 font-medium text-md "
            onClick={() => handleOpen(1)}
          >
            01 Shipping
          </AccordionHeader>
          <AccordionBody>
            <ShippingForm />
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            className="p-3 font-medium text-md"
            onClick={() => handleOpen(2)}
          >
            02 Delivery
          </AccordionHeader>
          <AccordionBody>
            <DeliveryForm />
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            className="p-3 font-medium text-md"
            onClick={() => handleOpen(3)}
          >
            03 What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>

      <div className="w-auto sm:w-1/3 hidden sm:block bg-white p-3 font-medium text-md">
        <div className="">test</div>
      </div>
    </div>
  );
};
