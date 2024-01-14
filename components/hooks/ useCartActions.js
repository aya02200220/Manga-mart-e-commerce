import { useAppContext } from "../providers/AppContext";
import CartToast from "../Notifications/CartToast";
import toast from "react-hot-toast";

export const useCartActions = (mangaData, setItemCount, itemCount) => {
  const { updateCart, cartItems } = useAppContext();

  //////////// Add an item ////////////////////
  const handleAddToCart = () => {
    const timestamp = new Date().toISOString();
    const newItem = { ...mangaData, timestamp };

    setItemCount((prev) => prev + 1);
    toast.custom((t) => <CartToast mangaData={mangaData} actionType="Add" />, {
      duration: 300,
    });
    cartItems.push(newItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCart();
  };

  //////////// Decrease an item ////////////////////
  const handleDecrease = (itemCount) => {
    setItemCount((prev) => prev - 1);

    if (itemCount === 1) {
      console.log("toast remove2");
      toast.custom(
        (t) => <CartToast mangaData={mangaData} actionType="Remove" />,
        {
          duration: 300,
        }
      );
    }
    const index = cartItems.findIndex((item) => item.id === mangaData.id);
    if (index !== -1) {
      cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      updateCart();
    }
  };

  //////////// Increase an item ////////////////////
  const handleIncrease = (itemCount) => {
    const timestamp = new Date().toISOString();
    const newItem = { ...mangaData, timestamp };

    setItemCount((prev) => prev + 1);
    cartItems.push(newItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCart();
  };

  //////////// Remove an item ////////////////////
  const handleRemoveItem = () => {
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== mangaData.id
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    updateCart();
  };

  return { handleAddToCart, handleIncrease, handleDecrease, handleRemoveItem };
};
