import { useEffect, useState } from "react";
import { Typography, Button, Popover } from "@mui/material";

import { auth, provider } from "@/components/firebase";
import {
  onAuthStateChanged,
  signOut,
  signInWithRedirect,
  getRedirectResult,
  User,
} from "firebase/auth";
import Image from "next/image";

import Logo from "../public/Manga.png";

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
    <nav className="w-full bg-[#f4f4f4] h-[70px] flex items-center justify-between px-5">
      <div className="flex flex-row items-center">
        <Image src={Logo} height={50} alt="Manga-mart Logo" />
      </div>

      {user ? (
        <div className="flex flex-row items-center">
          <p className="mr-2 text-[20px] uppercase">
            HELLO! {user.displayName}
          </p>
          <div onClick={handleAvatarClick}>
            <Image src={imageUrl} alt="User Photo" width={30} height={30} />
          </div>
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
        </div>
      ) : (
        <button
          onClick={handleLogin}
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <svg
            class="w-4 h-4 mr-2"
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
        // <div>
        //   <button onClick={handleLogin}>Login with Google</button>
        // </div>
      )}
    </nav>
  );
}

export default Header;
