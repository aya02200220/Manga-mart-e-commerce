import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { MangaData } from "@/types";

interface AppContextType {
  isGoogleLoggedIn: boolean;
  itemsInCart: number;
  favCounts: number;
  favItems: MangaData[];
  updateFavs: () => void;
  removeAllFavs: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isGoogleLoggedIn, setIsGoogleLoggedIn] = useState(false);
  const [itemsInCart, setItemsInCart] = useState<number>(0);
  const [favCounts, setFavCounts] = useState<number>(0);
  const [favItems, setFavItems] = useState<MangaData[]>([]);

  // useEffect(() => {
  //   // console.log("context isGoogleLoggedIn:", isGoogleLoggedIn);
  // }, [isGoogleLoggedIn]);

  useEffect(() => {
    // Googleのログイン状態を取得
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsGoogleLoggedIn(!!user);
      updateFavs();
    });

    // favsとitemsInCartをローカルストレージから取得
    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavItems(favs);
    setFavCounts(favs.length);

    const cartItems = JSON.parse(localStorage.getItem("itemsInCart") || "[]");
    setItemsInCart(cartItems.length);

    // クリーンアップ関数
    return () => {
      unsubscribe();
    };
  }, []);

  // favoritesを更新する関数
  const updateFavs = () => {
    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavItems(favs);
    setFavCounts(favs.length);
  };

  // 全てのお気に入りを削除する関数
  const removeAllFavs = () => {
    localStorage.removeItem("favs"); // ローカルストレージからお気に入りを削除
    setFavCounts(0); // お気に入りの数を0にリセット
    updateFavs();
  };

  return (
    <AppContext.Provider
      value={{
        isGoogleLoggedIn,
        itemsInCart,
        favCounts,
        updateFavs,
        removeAllFavs,
        favItems,
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
