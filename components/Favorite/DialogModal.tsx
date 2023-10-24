import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { CSSTransition } from "react-transition-group";
import { useAppContext } from "../providers/AppContext";

interface DialogModalProps {
  open: boolean;
  onClose: () => void;
}

export const DialogModal: React.FC<DialogModalProps> = ({ open, onClose }) => {
  // const [isDialogOpen, setIsDialogOpen] = useState(open);

  const { removeAllFavs, updateFavs } = useAppContext();

  const handleRemoveAll = () => {
    removeAllFavs();
    updateFavs();
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    // <CSSTransition in={open} timeout={150} unmountOnExit>
    <div
      className={`${
        open ? "fixed" : "hidden"
      } z-50 top-0 left-0 w-full h-full bg-[#33333377] flex items-center justify-center`}
      style={{ backdropFilter: "blur(2px)" }}
      onClick={handleCancel}
    >
      <div className="fixed top-100">
        <div
          data-aos="fade-down"
          data-aos-duration="900"
          className="bg-white rounded-md max-w-[390px] top-50 "
          onClick={handleContentClick}
        >
          {" "}
          <div className="text-lg ml-4 py-2 font-semibold">Confirm Removal</div>
          <DialogBody divider className="mx-3">
            Are you sure you want to remove all favorites? This action cannot be
            undone.
          </DialogBody>
          <div className="flex justify-end gap-1 p-2 mr-2">
            <Button
              className="text-[#2f712f]  text-[11px] rounded-md font-medium hover:bg-[#52a4807f] px-3 py-1"
              variant="text"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              className="text-white text-[11px] rounded-md font-thin bg-[#af5050] hover:bg-[#0e0b0b] px-2 py-1"
              variant="text"
              onClick={handleRemoveAll}
            >
              Remove All
            </Button>
          </div>
        </div>
      </div>
    </div>
    // </CSSTransition>
  );
};
