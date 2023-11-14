import { Rating } from "@mui/material";
import { MangaData } from "@/types";
import { RxCrossCircled } from "react-icons/rx";
import { motion } from "framer-motion";
import { useCartActions } from "../hooks/ useCartActions";
import { useEffect, useState } from "react";
import { useAppContext } from "../providers/AppContext";
import AddToFav from "../Favorite/AddToFav";

const modalVariant = {
  hidden: {
    opacity: 0,
    scaleY: 0.5,
    transformOrigin: "center bottom",
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scaleY: 0.5,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

interface ModalProps {
  mangaData: MangaData | null;
  isOpen: boolean;
  onRequestClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ mangaData, isOpen, onRequestClose }) => {
  const [itemCount, setItemCount] = useState<number>(0);

  const { updateCart, cartItems } = useAppContext();
  const { handleAddToCart, handleRemoveItem } = useCartActions(
    mangaData,
    setItemCount
  );

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const count = cartItems.filter((item) => item.id === mangaData?.id).length;
    setItemCount(count);
  }, [cartItems, mangaData?.id]);

  return (
    <>
      {/* <!-- Main modal --> */}
      {isOpen && (
        <div
          onClick={onRequestClose}
          aria-hidden="true"
          className="fixed z-40 flex justify-center w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-full bg-[#0a0a0ad5]"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariant}
            onClick={handleContentClick}
            className="relative w-[80%] md:w-full sm:max-w-2xl h-[200px] sm:max-h-full"
          >
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 top-8">
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between p-2 sm:p-4 border-b rounded-t dark:border-gray-600">
                <div className="flex items-center gap-2">
                  <h3 className="flex text:sm sm:text-xl font-semibold text-gray-900 dark:text-white">
                    Synopsis of {mangaData?.title}
                  </h3>
                  <div className="flex items-center justify-center ml-2">
                    <Rating
                      name="half-rating-read"
                      defaultValue={mangaData?.rate ?? 0}
                      precision={0.1}
                      readOnly
                      size="small"
                    />{" "}
                    <p className="ml-2 text-gray-900 dark:text-white">
                      {mangaData?.rate}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                  onClick={onRequestClose}
                >
                  <RxCrossCircled size="medium" />
                  {/* <span className="sr-only">Close modal</span> */}
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-6 flex items-start ">
                <img
                  className="hidden sm:block h-full sm:h-[28%] w-fyll sm:w-[32%] sm:object-cover rounded-sm mr-4"
                  style={{
                    boxShadow: "10px 8px 10px 1px rgba(0, 0, 0, 0.4)",
                  }}
                  src={mangaData?.image}
                  alt={mangaData?.title}
                />
                <p
                  className="text-sm sm:text-base leading-[17px] sm:leading-relaxed text-gray-500 dark:text-gray-400 overflow-y-auto"
                  style={{
                    maxHeight: "calc(55vh)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {mangaData?.description}
                </p>
              </div>

              {/* <!-- Modal footer --> */}
              <div className="flex relative items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 justify-between">
                <div className="flex gap-2 justify-center items-center">
                  {itemCount > 0 ? (
                    <button
                      onClick={handleRemoveItem}
                      className="text-white bg-[#a84444] hover:bg-[#c36262] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#a84444] dark:hover:bg-[#c36262]dark:focus:ring-[#a84444]"
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      onClick={handleAddToCart}
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to Cart
                    </button>
                  )}
                  <div className="bg-[#ffffffd4] rounded-full">
                    {mangaData && <AddToFav mangaData={mangaData} />}
                  </div>
                </div>
                <div className="flex">
                  <button
                    onClick={onRequestClose}
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
            {/* </div> */}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;
