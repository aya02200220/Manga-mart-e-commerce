import { useEffect, useState } from "react";
import { Dialog, DialogTitle, ListItemText, Rating } from "@mui/material";
import { MangaData } from "@/types";
import { useAppContext } from "../providers/AppContext";
import NoFavImage from "../../public/NoFavorites.png";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";

interface ModalProps {
  onRequestClose: () => void;
  isOpen: boolean;
  handleCloseDialog: () => void;
}

const FavModal: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  // const isGoogleLoggedIn = useAppContext().isGoogleLoggedIn;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // ダイアログを開くハンドラ
  const handleDeleteClick = () => {
    setIsDialogOpen(true);
  };

  // ダイアログを閉じるハンドラ
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

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
          className="fixed z-40 flex justify-center w-full p-4 overflow-x-hidden inset-0 h-full bg-[#0a0a0ad5]"
        >
          <div
            onClick={handleContentClick}
            className="relative w-[92%] md:w-[80%] "
          >
            {/* <!-- Modal content --> */}
            <div
              className="relative bg-white rounded-lg shadow
              top-8 h-[85vh]"
            >
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between p-2 sm:p-4 border-b rounded-t ">
                <div className="flex items-center gap-2 ">
                  <h3 className="flex text:sm sm:text-xl font-semibold text-[#333] ">
                    My Favorites ( {favs} )
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
              <div className="p-3 text-[#333] h-[63vh] overflow-y-auto ">
                {favs <= 0 ? (
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
                  <div className="p-6 flex gap-8 flex-wrap">
                    {favData.map((data: MangaData) => (
                      <>
                        <div className="flex flex-col w-[170px]">
                          <img
                            src={data.image}
                            className="hidden sm:block h-full sm:h-[200px] w-full sm:w-[170px] sm:object-cover rounded-sm"
                          />
                          <p
                            className="text-sm flex justify-center items-start break-normal h-[32px] leading-4 mt-1"
                            key={data.id}
                          >
                            {data.title}
                          </p>
                          <p className="text-md  flex justify-center items-start break-normal leading-4">
                            ${data.price.toFixed(2)}
                          </p>
                        </div>
                      </>
                    ))}

                    <p
                      className="text-sm sm:text-base leading-[17px] sm:leading-relaxed text-gray-500 overflow-y-auto"
                      style={{
                        maxHeight: "calc(55vh)",
                        whiteSpace: "pre-line",
                      }}
                    ></p>
                  </div>
                )}
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex justify-end items-center p-4 space-x-2 border-t border-gray-200 rounded-b">
                <button
                  onClick={handleDeleteClick}
                  type="button"
                  className="text-[#dedede] bg-[#c14242] hover:bg-[#9f3737] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-1.5 hover:text-[#fff] focus:z-10"
                >
                  Delete All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <FavDialog handleCloseDialog={handleCloseDialog} />
      </Dialog>
    </>
  );
};

export default FavModal;

export const FavDialog = ({ handleCloseDialog }) => {
  return (
    <div>
      <DialogTitle sx={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <NewReleasesIcon sx={{ fontSize: "40px", color: "#a31919" }} /> */}
          <div style={{ fontSize: "20px", lineHeight: "21px", marginLeft: 1 }}>
            Are you sure you want to delete this post?
          </div>
        </div>
      </DialogTitle>
      <div className="flex">
        <button onClick={handleCloseDialog} className="flex-grow bg-[#9b3636]">
          <ListItemText primary={"NO"} />
        </button>

        <button onClick={handleCloseDialog} className="flex-grow">
          <ListItemText primary={"YES"} />
        </button>
      </div>
    </div>
  );
};
