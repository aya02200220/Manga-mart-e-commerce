import { useAppContext } from "../providers/AppContext";

export const useCartActions = () => {
  const { updateCart, cartItems } = useAppContext();

  const incrementItem = (mangaData) => {
    // ...handleIncrease ロジック
  };

  const decrementItem = (mangaData) => {
    // ...handleDecrease ロジック
  };

  const removeItem = (mangaData) => {
    // ...handleRemove ロジック
  };

  return { incrementItem, decrementItem, removeItem };
};
