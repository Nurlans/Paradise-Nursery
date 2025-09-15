import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../store/cartSlice';
import { Plant } from '../data/plants';

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const addItemToCart = (plant: Plant) => {
    dispatch(addToCart(plant));
  };

  const removeItemFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const increaseItemQuantity = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const decreaseItemQuantity = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const clearAllItems = () => {
    dispatch(clearCart());
  };

  return {
    cart,
    addItemToCart,
    removeItemFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearAllItems,
  };
};