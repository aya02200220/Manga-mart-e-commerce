import { useEffect, useState } from "react";
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
  const imageUrl = user?.photoURL ?? "default-image-url";

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
    <nav className="w-full bg-[#fff] h-[70px] flex items-center mx-2 ">
      {user ? (
        <div className="flex flex-row items-center ">
          <Image src={Logo} height={50} alt="Manga-mart Logo" />
          <p>{user.displayName}</p>
          <div>
            <Image src={imageUrl} alt="User Photo" width={50} height={50} />
          </div>

          <button onClick={handleLogout}>Logout</button>
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
