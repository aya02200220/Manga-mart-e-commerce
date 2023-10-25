// import { useEffect, useState } from "react";
// import {
//   Typography,
//   Button,
//   Popover,
//   FormControl,
//   InputLabel,
//   OutlinedInput,
//   InputAdornment,
//   IconButton,
//   TextField,
//   MenuItem,
//   Badge,
// } from "@mui/material";
// import { BiSearch } from "react-icons/bi";
// import { FcGoogle } from "react-icons/fc";
// import { GrFavorite, GrCart } from "react-icons/gr";
// import { debounce } from "lodash";
// import { auth, provider } from "@/components/firebase";
// import {
//   onAuthStateChanged,
//   signOut,
//   signInWithRedirect,
//   getRedirectResult,
//   User,
// } from "firebase/auth";
// import Image from "next/image";
// import Logo from "../../public/Manga.png";
// import { useAppContext } from "../providers/AppContext";
// import FavModal from "../Favorite/FavModal";

// interface HeaderProps {
//   onSearch?: (term: string, category: string) => void;
// }

// const filterMenu = [
//   {
//     value: "Title",
//     label: "Title",
//   },
//   {
//     value: "Description",
//     label: "Description",
//   },
// ];
// function Header(props: HeaderProps) {
//   const [user, setUser] = useState(auth.currentUser);
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const imageUrl = user?.photoURL ?? "default-image-url";

//   const [searchInput, setSearchInput] = useState("");
//   const [searchCategory, setSearchCategory] = useState("Title");
//   const [isOpen, setIsOpen] = useState(false);

//   const { isGoogleLoggedIn, favCounts, itemsInCart } = useAppContext();

//   // debounced検索処理
//   const debouncedSearch = debounce((term: string, category: string) => {
//     props.onSearch && props.onSearch(term, category);
//   }, 300);

//   useEffect(() => {
//     debouncedSearch(searchInput, searchCategory);
//     return () => {
//       debouncedSearch.cancel();
//     };
//   }, [searchInput, searchCategory]);

//   useEffect(() => {
//     if (auth.currentUser) {
//       setUser(auth.currentUser);
//     } else {
//       setUser(null);
//     }
//   }, [isGoogleLoggedIn]);

//   const handleLogout = () => {
//     signOut(auth).catch((error) => {
//       console.error("Logout error:", error.message);
//     });
//   };

//   const handleLogin = () => {
//     console.log("Login clicked");

//     signInWithRedirect(auth, provider).catch((error) => {
//       console.error("Login error:", error.message);
//     });
//   };

//   const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleModalOpen = () => {
//     setIsOpen(true);
//   };
//   const handleModalClose = () => {
//     setIsOpen(false);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;

//   useEffect(() => {
//     getRedirectResult(auth)
//       .then((result) => {
//         if (result && result.user) {
//           // console.log("Logged in as:", result.user.displayName);
//         }
//       })
//       .catch((error) => {
//         // console.error("Login error:", error.message);
//       });
//   }, []);

//   return (
//     <nav className="w-full bg-[#ffffffaf] h-[70px] flex items-center  justify-between px-2 sm:px-3 md:px-16 fixed top-0 z-40">
//       <div className="flex flex-row items-center ">
//         <Image
//           className="hidden sm:block"
//           src={Logo}
//           height={50}
//           alt="Manga-mart Logo"
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         />
//       </div>

//       <div className="flex justify-between sm:justify-end items-center w-full">
//         <div className="flex items-center ">
//           <div className=" hidden sm:block">
//             <TextField
//               className="bg-[#eaf6ff]"
//               size="small"
//               id="outlined-select-search-category"
//               select
//               label="Search category"
//               defaultValue="Title"
//               style={{ width: "130px" }}
//               value={searchCategory}
//               onChange={(e) => setSearchCategory(e.target.value)}
//             >
//               {filterMenu.map((option) => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </div>
//           <FormControl
//             className="mr-4"
//             sx={{ m: 1, width: { xs: "150px", sm: "200px" } }}
//             variant="outlined"
//           >
//             <InputLabel htmlFor="search" size="small">
//               Search
//             </InputLabel>
//             <OutlinedInput
//               onChange={(e) => {
//                 setSearchInput(e.target.value);
//               }}
//               id="search-arb"
//               sx={{
//                 height: "40px",
//                 paddingTop: "10px",
//                 paddingBottom: "10px",
//               }}
//               endAdornment={
//                 <InputAdornment position="end">
//                   <BiSearch />
//                 </InputAdornment>
//               }
//               label="Search"
//             />
//           </FormControl>
//         </div>

//         <div className="flex">
//           {user === undefined ? null : user ? (
//             <div className="flex flex-row items-center">
//               <p className="flex flex-col leading-4 justify-center items-center mr-2 text-[15px] uppercase hidden md:block">
//                 <p>HELLO!</p>
//                 <p> {user?.displayName}</p>
//               </p>
//               <IconButton onClick={handleAvatarClick}>
//                 <Image
//                   src={imageUrl}
//                   alt="User Photo"
//                   width={30}
//                   height={30}
//                   className="rounded-full"
//                 />
//               </IconButton>
//               <Popover
//                 id={id}
//                 open={open}
//                 anchorEl={anchorEl}
//                 onClose={handleClose}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "center",
//                 }}
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "center",
//                 }}
//               >
//                 <Button
//                   onClick={handleLogout}
//                   style={{ padding: "10px", fontSize: "16px" }}
//                 >
//                   Logout
//                 </Button>
//               </Popover>

//               <IconButton className="ml-2" onClick={() => handleModalOpen()}>
//                 <Badge badgeContent={favCounts} color="secondary">
//                   <GrFavorite size={20} />
//                 </Badge>
//               </IconButton>
//               <IconButton className="ml-2">
//                 <Badge badgeContent={itemsInCart} color="primary">
//                   <GrCart size={20} />
//                 </Badge>
//               </IconButton>
//             </div>
//           ) : (
//             <button
//               onClick={handleLogin}
//               type="button"
//               className="text-white bg-[#2f415f] hover:bg-[#223962]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-3 py-1 h-10 text-center inline-flex items-center leading-4"
//             >
//               <FcGoogle size="20px" />
//               <p className="ml-1">Sign in with Google</p>
//             </button>
//           )}
//         </div>
//       </div>
//       <div className="relative">
//         <FavModal isOpen={isOpen} onRequestClose={handleModalClose} />
//       </div>
//     </nav>
//   );
// }

// export default Header;
