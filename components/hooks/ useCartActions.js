import { useAppContext } from "../providers/AppContext";
import CartToast from "../Notifications/CartToast";
import toast from "react-hot-toast";

export const useCartActions = (mangaData, updateItemCount, onCartUpdated) => {
  const { updateCart, cartItems } = useAppContext();

  const handleDecrease = (itemCount) => {
    updateItemCount((prev) => prev - 1);
    // setItemCount((prev) => prev - 1);
    if (itemCount === 1) {
      console.log("toast remove2");
      toast.custom((t) => (
        <CartToast mangaData={mangaData} actionType="Remove" />
      ));
    }
    const index = cartItems.findIndex((item) => item.id === mangaData.id);
    if (index !== -1) {
      cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      onCartUpdated();
      updateCart();
    }
  };

  const handleIncrease = (itemCount) => {
    const timestamp = new Date().toISOString();
    const newItem = { ...mangaData, timestamp };

    updateItemCount((prev) => prev + 1);
    cartItems.push(newItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    onCartUpdated();
    updateCart();
  };

  const removeItem = (mangaData) => {
    // ...handleRemove ロジック
  };

  return { handleIncrease, handleDecrease, removeItem };
};
