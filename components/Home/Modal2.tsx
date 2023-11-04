// import { Rating } from "@mui/material";
// import { MangaData } from "@/types";
// import { RxCrossCircled } from "react-icons/rx";
// import { motion } from "framer-motion";

// const modalVariant = {
//   hidden: {
//     opacity: 0,
//     scaleY: 0.5,
//     transformOrigin: "center bottom",
//   },
//   visible: {
//     opacity: 1,
//     scaleY: 1,
//     transition: {
//       duration: 0.4,
//       ease: "easeOut",
//     },
//   },
//   exit: {
//     opacity: 0,
//     scaleY: 0.5,
//     transition: {
//       duration: 0.3,
//       ease: "easeIn",
//     },
//   },
// };

// interface ModalProps {
//   manga: MangaData | null;
//   isOpen: boolean;
//   onRequestClose: () => void;
// }

// const Modal2: React.FC<ModalProps> = ({ manga, isOpen, onRequestClose }) => {
//   const handleContentClick = (e: React.MouseEvent) => {
//     e.stopPropagation();
//   };
//   return (
//     <>
//       {/* <!-- Main modal --> */}
//       {isOpen && (
//         <div
//           onClick={onRequestClose}
//           aria-hidden="true"
//           className="fixed z-40 flex justify-center w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-full bg-[#0a0a0ad5]"
//         >
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={modalVariant}
//             onClick={handleContentClick}
//             className="relative w-[80%] md:w-full sm:max-w-2xl h-[200px] sm:max-h-full"
//           >
//             <div
//               onClick={handleContentClick}
//               className="relative w-[80%] md:w-full sm:max-w-2xl h-[200px] sm:max-h-full"
//             >
//               {/* <!-- Modal content --> */}
//               <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 top-8">
//                 {/* <!-- Modal header --> */}
//                 <div className="flex items-start justify-between p-2 sm:p-4 border-b rounded-t dark:border-gray-600">
//                   <div className="flex items-center gap-2">
//                     <h3 className="flex text:sm sm:text-xl font-semibold text-gray-900 dark:text-white">
//                       Synopsis of {manga?.title}
//                     </h3>
//                     <div className="flex items-center justify-center ml-2">
//                       <Rating
//                         name="half-rating-read"
//                         defaultValue={manga?.rate ?? 0}
//                         precision={0.1}
//                         readOnly
//                         size="small"
//                       />{" "}
//                       <p className="ml-2 text-gray-900 dark:text-white">
//                         {manga?.rate}
//                       </p>
//                     </div>
//                   </div>
//                   <button
//                     type="button"
//                     className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
//                     onClick={onRequestClose}
//                   >
//                     <RxCrossCircled size="medium" />
//                     {/* <span className="sr-only">Close modal</span> */}
//                   </button>
//                 </div>
//                 {/* <!-- Modal body --> */}
//                 <div className="p-6 flex items-start">
//                   <img
//                     className="hidden sm:block h-full sm:h-[28%] w-fyll sm:w-[32%] sm:object-cover rounded-sm mr-4"
//                     style={{
//                       boxShadow: "10px 8px 10px 1px rgba(0, 0, 0, 0.4)",
//                     }}
//                     src={manga?.image}
//                     alt={manga?.title}
//                   />
//                   <p
//                     className="text-sm sm:text-base leading-[17px] sm:leading-relaxed text-gray-500 dark:text-gray-400 overflow-y-auto"
//                     style={{
//                       maxHeight: "calc(55vh)",
//                       whiteSpace: "pre-line",
//                     }}
//                   >
//                     {manga?.description}
//                   </p>
//                 </div>

//                 {/* <!-- Modal footer --> */}
//                 <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
//                   <button
//                     onClick={onRequestClose}
//                     type="button"
//                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     I accept
//                   </button>
//                   <button
//                     onClick={onRequestClose}
//                     type="button"
//                     className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
//                   >
//                     Decline
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Modal2;