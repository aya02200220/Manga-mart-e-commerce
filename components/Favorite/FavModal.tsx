import { useEffect, useState } from "react";
import { MangaData } from "@/types";
import { useAppContext } from "../providers/AppContext";
import NoFavImage from "../../public/NoFavorites.png";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import FavoriteToast from "../Notifications/FavoriteToast";
import { motion } from "framer-motion";
import { useCartActions } from "../hooks/ useCartActions";

import { DialogModal } from "../Cart/DialogModal";
import toast from "react-hot-toast";

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
  onRequestClose: () => void;
  isFavOpen: boolean;
}

const FavModal: React.FC<ModalProps> = ({ isFavOpen, onRequestClose }) => {
  // const isGoogleLoggedIn = useAppContext().isGoogleLoggedIn;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [favData, setFavData] = useState<MangaData[]>([]);
  const { favItems, favCounts, updateFavs } = useAppContext();

  // ダイアログを開くハンドラ
  const handleDeleteClick = () => {
    setIsDialogOpen(true);
  };

  // ダイアログを閉じるハンドラ
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    setFavData(favItems);
  }, [favCounts]);

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleRemoveFav = (dataToRemove: MangaData) => {
    toast.custom((t) => (
      <FavoriteToast mangaData={dataToRemove} actionType="Remove" />
    ));
    // 選択されたアイテムを削除
    const updatedFavData = favData.filter(
      (item) => item.id !== dataToRemove.id
    );
    // Local storageを更新
    localStorage.setItem("favs", JSON.stringify(updatedFavData));
    // ステートとお気に入りカウントを更新
    setFavData(updatedFavData);
    updateFavs();
  };

  return (
    <>
      {/* <!-- Main modal --> */}
      {isFavOpen && (
        <div
          onClick={onRequestClose}
          aria-hidden="true"
          className="fixed z-40 flex justify-center w-full p-4 overflow-x-hidden inset-0 h-full bg-[#0a0a0ad5]"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariant}
            onClick={handleContentClick}
            className="relative w-[92%] md:w-[60%] h-[300px] top-10"
          >
            {/* <div
              onClick={handleContentClick}
              className="relative w-[92%] md:w-[80%] h-[300px] top-10"
            > */}
            {/* <!-- Modal content --> */}
            <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden ">
              {/* <!-- Modal header --> */}
              <div className="flex flex-shrink-0  items-start justify-between p-2 sm:p-2 ml-2 border-b rounded-t ">
                <div className="flex items-center gap-2 ">
                  <h3 className="flex text:sm sm:text-xl font-semibold text-[#333] ">
                    My Favorites ( {favCounts} )
                  </h3>
                </div>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                  onClick={onRequestClose}
                >
                  <RxCrossCircled size="medium" />
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-3 text-[#333] flex-grow overflow-auto max-h-[70vh] min-h-[30vh]">
                {favCounts <= 0 ? (
                  <div className="flex flex-col sm:flex-row justify-center items-center">
                    <p className="text-[#3c3c3c] text-center ml--0 sm:ml-4 mt-6 text-lg sm:text-2xl">
                      No Favorites!
                    </p>
                    <Image
                      className="h-40 sm:h-40 w-auto"
                      src={NoFavImage}
                      alt="hero"
                      object-fit="cover"
                      objectPosition="top"
                    />
                  </div>
                ) : (
                  <div className="p-6 flex gap-2 sm:gap-8 flex-wrap pl-2 sm:pl-14">
                    {favData.map((data: MangaData) => (
                      <>
                        <div className="flex relative flex-col w-[100px] sm:w-[170px] border border-[#e9e7e7] rounded-lg">
                          {/* 追加：削除ボタン */}
                          <button
                            onClick={() => handleRemoveFav(data)}
                            className="absolute top-0 right-0 h-6 w-6 rounded-full bg-[#fff] text-[#555] hover:text-black flex items-center justify-center hover:bg-[#f2f2f2] transition duration-300 ease-in-out hover:scale-90"
                            aria-label="Remove item"
                          >
                            <RxCrossCircled size="medium" />
                          </button>
                          <img
                            src={data.image}
                            className="block h-[150px] sm:h-[200px] w-[100px] sm:w-[170px] sm:object-cover rounded-sm"
                          />
                          <p
                            className="text-[13px] sm:text-sm flex justify-center items-start break-normal h-[28px] sm:h-[32px] leading-3 sm:leading-4 mt-1 mx-1.5"
                            key={data.id}
                          >
                            {data.title}
                          </p>
                          <p className="text-[15px] sm:text-md flex justify-center items-start break-normal leading-4 pb-2">
                            ${data.price.toFixed(2)}
                          </p>
                        </div>
                      </>
                    ))}
                  </div>
                )}
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex flex-shrink-0 justify-end items-center pr-4 space-x-2 border-t border-gray-200 h-14">
                {favCounts > 0 && (
                  <button
                    onClick={handleDeleteClick}
                    type="button"
                    className="text-[#dedede] bg-[#c14242] hover:bg-[#9f3737] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-1.5 hover:text-[#fff] focus:z-10"
                  >
                    Remove All
                  </button>
                )}
              </div>
            </div>
            {/* </div> */}
          </motion.div>
        </div>
      )}
      <DialogModal open={isDialogOpen} onClose={handleCloseDialog} />
    </>
  );
};

export default FavModal;
