import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { MangaData } from "@/types";

interface AppContextType {
  isGoogleLoggedIn: boolean;
  cartItems: MangaData[];
  cartItemsCounts: number;
  favCounts: number;
  favItems: MangaData[];
  updateCart: () => void;
  removeAllItems: () => void;
  updateFavs: () => void;
  removeAllFavs: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isGoogleLoggedIn, setIsGoogleLoggedIn] = useState<boolean | null>(
    null
  );
  const [cartItems, setCartItems] = useState<MangaData[]>([]);
  const [cartItemsCounts, setCartItemsCounts] = useState<number>(0);

  const [favItems, setFavItems] = useState<MangaData[]>([]);
  const [favCounts, setFavCounts] = useState<number>(0);

  // useEffect(() => {
  //   // console.log("context isGoogleLoggedIn:", isGoogleLoggedIn);
  // }, [isGoogleLoggedIn]);

  useEffect(() => {
    // Googleのログイン状態を取得
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsGoogleLoggedIn(!!user);
      updateFavs();
      updateCart();
    });

    // favsとcartItemsをローカルストレージから取得
    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavItems(favs);
    setFavCounts(favs.length);

    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(cartItems.length);

    // クリーンアップ関数
    return () => {
      unsubscribe();
    };
  }, []);

  // favoritesを更新する関数//////////////////////////////////////////////////////////
  const updateFavs = () => {
    const favs = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavItems(favs);
    setFavCounts(favs.length);
  };

  // 全てのお気に入りを削除する関数
  const removeAllFavs = () => {
    localStorage.removeItem("favs");
    setFavCounts(0);
    updateFavs();
  };

  // cartを更新する関数/////////////////////////////////////////////////////////
  const updateCart = () => {
    const Cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(Cart);
    setCartItemsCounts(Cart.length);
  };

  // 全てのカート内のアイテムを削除する関数
  const removeAllItems = () => {
    localStorage.removeItem("cartItems");
    setCartItemsCounts(0);
    updateCart();
  };

  return (
    <AppContext.Provider
      value={{
        isGoogleLoggedIn,
        cartItems,
        cartItemsCounts,
        favCounts,
        updateCart,
        removeAllItems,
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
