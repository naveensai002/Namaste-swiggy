import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'sonner';

const initialState = {
  cartItems: [],
  itemsInCart: 0,
  amount: 0,
  cartTotal: 0,
  shipping: 80,
};

const getItemsFromLocalStorage = () => {
  return localStorage.getItem('cart') || initialState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getItemsFromLocalStorage(),
  reducers: {
    addItemToCart: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
