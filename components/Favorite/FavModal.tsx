import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { MangaData } from "@/types";
import { useAppContext } from "../providers/AppContext";
import NoFavImage from "../../public/NoFavorites.png";
import Image from "next/image";

interface ModalProps {
  onRequestClose: () => void;
  isOpen: boolean;
}

const FavModal: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  // const isGoogleLoggedIn = useAppContext().isGoogleLoggedIn;
  const { favs, itemsInCart } = useAppContext();

  const [favData, setFavData] = useState<MangaData[]>([]);

  useEffect(() => {
    setFavData(JSON.parse(localStorage.getItem("favs") || "[]"));
  }, [favs]);

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <>
      {/* <!-- Main modal --> */}
      {isOpen && (
        <div
          onClick={onRequestClose}
          aria-hidden="true"
          className="fixed z-40 flex justify-center w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-full bg-[#0a0a0ad5]"
        >
          <div
            onClick={handleContentClick}
            className="relative w-[92%] md:w-[80%] sm:max-h-full"
          >
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 top-8">
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between p-2 sm:p-4 border-b rounded-t dark:border-gray-600">
                <div className="flex items-center gap-2">
                  <h3 className="flex text:sm sm:text-xl font-semibold text-gray-900 dark:text-white">
                    Your Favorites ( {favs} )
                  </h3>
                </div>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={onRequestClose}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="m-3 text-gray-900 dark:text-white">
                {favs <= 0 ? (
                  <div className="flex flex-col sm:flex-row justify-center items-center">
                    <p className="text-center ml--0 sm:ml-4 mt-6 text-lg sm:text-2xl">
                      No Favorites!
                    </p>
                    <Image
                      className="h-40 sm:h-40 w-auto"
                      src={NoFavImage}
                      alt="hero"
                      objectFit="cover"
                      objectPosition="top"
                    />
                  </div>
                ) : (
                  <div className="p-6 flex items-start">
                    {favData.map((data: MangaData) => (
                      <>
                        <p key={data.id}>{data.title}</p>
                        <img
                          src={data.image}
                          className="hidden sm:block h-full sm:h-[28%] w-fyll sm:w-[32%] sm:object-cover rounded-sm mr-4"
                          style={{
                            boxShadow: "10px 8px 10px 1px rgba(0, 0, 0, 0.4)",
                          }}
                        />
                      </>
                    ))}

                    <p
                      className="text-sm sm:text-base leading-[17px] sm:leading-relaxed text-gray-500 dark:text-gray-400 overflow-y-auto"
                      style={{
                        maxHeight: "calc(55vh)",
                        whiteSpace: "pre-line",
                      }}
                    ></p>
                  </div>
                )}
              </div>

              {/* <!-- Modal footer --> */}
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={onRequestClose}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  I accept
                </button>
                <button
                  onClick={onRequestClose}
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FavModal;
