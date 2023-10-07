interface ModalProps {
  manga: singleData | null;
  isOpen: boolean;
  onRequestClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ manga, isOpen, onRequestClose }) => {
  return (
    <>
      {/* <!-- Main modal --> */}
      {isOpen && (
        <div
          onClick={onRequestClose}
          aria-hidden="true"
          className="fixed z-50 flex justify-center w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-full bg-[#0a0a0aa5]"
        >
          <div className="relative w-[80%] md:w-full sm:max-w-2xl sm:max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 top-8 ">
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between p-2 sm:p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text:sm sm:text-xl font-semibold text-gray-900 dark:text-white">
                  Synopsis of {manga.title}
                </h3>
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
              <div className="p-6 flex items-start">
                <img
                  className="hidden sm:block h-full sm:h-[28%] w-fyll sm:w-[32%] sm:object-cover rounded-sm mr-4"
                  style={{
                    boxShadow: "10px 8px 10px 1px rgba(0, 0, 0, 0.4)",
                  }}
                  src={manga.image}
                  alt={manga.title}
                />
                <p
                  className="text-sm sm:text-base leading-[17px] sm:leading-relaxed text-gray-500 dark:text-gray-400 overflow-y-auto"
                  style={{
                    maxHeight: "calc(55vh)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {manga.description}
                </p>
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

export default Modal;
