import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { ShippingForm } from "./ShippingForm";
import { DeliveryForm } from "./DeliveryForm";
import { PaymentForm } from "./PaymentForm";
import { ItemInCart } from "./ItemInCart";

interface IconProps {
  id: number;
  openSections: number[];
  setOpenSections: React.Dispatch<React.SetStateAction<number[]>>;
}

function Icon({ id, openSections, setOpenSections }: IconProps) {
  const isOpen = openSections.includes(id);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${isOpen ? "rotate-180" : ""} h-5 w-5 transition-transform`}
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
  const [openSections, setOpenSections] = React.useState<number[]>([1]);

  const handleOpen = (value: number) => {
    if (openSections.includes(value)) {
      setOpenSections((prev) =>
        prev.filter((sectionId) => sectionId !== value)
      );
    } else {
      setOpenSections((prev) => [...prev, value]);
    }
  };

  return (
    <div className="flex m-2 sm:m-10 md:mx-[15%] gap-4 justify-center ">
      <div className="w-full sm:w-2/3 max-w-[520px] h-auto ">
        <Accordion
          className="bg-white"
          open={openSections.includes(1)}
          icon={
            <Icon
              id={1}
              openSections={openSections}
              setOpenSections={setOpenSections}
            />
          }
        >
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
        <Accordion
          className="bg-white"
          open={openSections.includes(2)}
          icon={
            <Icon
              id={2}
              openSections={openSections}
              setOpenSections={setOpenSections}
            />
          }
        >
          <AccordionHeader
            className="p-3 font-medium text-md mt-4"
            onClick={() => handleOpen(2)}
          >
            02 Delivery
          </AccordionHeader>
          <AccordionBody>
            <DeliveryForm />
          </AccordionBody>
        </Accordion>
        <Accordion
          className="bg-white"
          open={openSections.includes(3)}
          icon={
            <Icon
              id={3}
              openSections={openSections}
              setOpenSections={setOpenSections}
            />
          }
        >
          <AccordionHeader
            className="p-3 font-medium text-md mt-4"
            onClick={() => handleOpen(3)}
          >
            03 Payment
          </AccordionHeader>
          <AccordionBody>
            <PaymentForm />
          </AccordionBody>
        </Accordion>
      </div>

      <div className="w-auto sm:w-1/3 max-w-[300px] hidden sm:block bg-white p-3 font-medium text-md h-full">
        <div className="sticky top-0 ">
          <ItemInCart />
        </div>
      </div>
    </div>
  );
};
