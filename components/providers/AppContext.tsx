import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

interface AppContextType {
  isGoogleLoggedIn: boolean;
  itemsInCart: number;
  favs: number;
  updateFavs: () => void;
  removeAllFavs: () => void;
  setFavChanged: (changed: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isGoogleLoggedIn, setIsGoogleLoggedIn] = useState(false);
  const [itemsInCart, setItemsInCart] = useState<number>(0);
  const [favs, setFavs] = useState<number>(0);

  // useEffect(() => {
  //   // console.log("context isGoogleLoggedIn:", isGoogleLoggedIn);
  // }, [isGoogleLoggedIn]);

  useEffect(() => {
    // Googleのログイン状態を取得
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // console.log("Logged user:", user);
      setIsGoogleLoggedIn(!!user);
      updateFavs();
    });

    // favsとitemsInCartをローカルストレージから取得
    const favItems = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavs(favItems.length);

    const cartItems = JSON.parse(localStorage.getItem("itemsInCart") || "[]");
    setItemsInCart(cartItems.length);

    // クリーンアップ関数
    return () => {
      unsubscribe();
    };
  }, []);

  // favsを更新する関数
  const updateFavs = () => {
    const favItems = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavs(favItems.length);
  };
  // 全てのお気に入りを削除する関数
  const removeAllFavs = () => {
    localStorage.removeItem("favs"); // ローカルストレージからお気に入りを削除
    setFavs(0); // お気に入りの数を0にリセット
  };

  return (
    <AppContext.Provider
      value={{
        isGoogleLoggedIn,
        itemsInCart,
        favs,
        updateFavs,
        removeAllFavs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
