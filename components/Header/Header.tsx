import { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Popover,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { BiSearch } from "react-icons/bi";
import { GrFavorite, GrCart } from "react-icons/gr";

import { auth, provider } from "@/components/firebase";
import {
  onAuthStateChanged,
  signOut,
  signInWithRedirect,
  getRedirectResult,
  User,
} from "firebase/auth";
import Image from "next/image";

import Logo from "../../public/Manga.png";

function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const imageUrl = user?.photoURL ?? "default-image-url";

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.error("Logout error:", error.message);
    });
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result && result.user) {
          console.log("Logged in as:", result.user.displayName);
        }
      })
      .catch((error) => {
        console.error("Login error:", error.message);
      });
  }, []);

  const handleLogin = () => {
    signInWithRedirect(auth, provider).catch((error) => {
      console.error("Login error:", error.message);
    });
  };

  return (
    <nav className="w-full bg-[#ffffffaf] h-[70px] flex items-center  justify-between px-2 md:px-20 fixed top-0 z-10">
      <div className="flex flex-row items-center ">
        <Image
          className="hidden sm:block"
          src={Logo}
          height={50}
          alt="Manga-mart Logo"
        />
      </div>

      <div className="flex justify-between sm:justify-end items-center w-full">
        <div className="flex ">
          <FormControl
            className="mr-4"
            sx={{ m: 1, width: { xs: "150px", sm: "200px" } }}
            variant="outlined"
          >
            <InputLabel htmlFor="search" size="small">
              Search
            </InputLabel>
            <OutlinedInput
              id="search-arb"
              sx={{
                height: "40px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <BiSearch />
                </InputAdornment>
              }
              label="Search"
            />
          </FormControl>
        </div>
        {/* <div className="flex-grow"></div> */}
        <div className="flex">
          {user ? (
            <div className="flex flex-row items-center">
              <p className="flex flex-col leading-4 justify-center items-center mr-2 text-[15px] uppercase hidden sm:block">
                <p>HELLO!</p>
                <p> {user.displayName}</p>
              </p>
              <IconButton onClick={handleAvatarClick}>
                <Image
                  src={imageUrl}
                  alt="User Photo"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </IconButton>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Button
                  onClick={handleLogout}
                  style={{ padding: "10px", fontSize: "16px" }}
                >
                  Logout
                </Button>
              </Popover>

              <IconButton className="ml-2">
                <GrFavorite size={20} />
              </IconButton>
              <IconButton className="ml-2">
                <GrCart size={20} />
              </IconButton>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 h-14 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 "
            >
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
              Sign in with Google
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
