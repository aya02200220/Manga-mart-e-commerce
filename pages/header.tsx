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
          <p className="mr-4 text-[20px] uppercase">
            HELLO! {user.displayName}
          </p>
          <div onClick={handleAvatarClick}>
            <Image src={imageUrl} alt="User Photo" width={50} height={50} />
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
        <div>
          <button onClick={handleLogin}>Login with Google</button>
        </div>
      )}
    </nav>
  );
}

export default Header;
