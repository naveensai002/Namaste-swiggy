import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'sonner';

const initialState = {
  cartItems: [],
  itemsInCart: 0,
  amount: 0,
  cartTotal: 0,
  shipping: 80,
  orderTotal: 0,
};

const getItemsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || initialState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getItemsFromLocalStorage(),
  reducers: {
    addItemToCart: (state, action) => {
      const { cartProduct } = action.payload;

      // function to check if the item already exist in cart
      // if already exists then only change the amount in card,orderTotal,price
      // if no then add item to the cart and update the amount,orderTotal,price

      const alreadyInCart = state.cartItems.find(
        (item) => item.id === cartProduct.id
      );
      if (alreadyInCart) {
        console.log('already in cart');
        alreadyInCart.amount += 1;
        state.itemsInCart += alreadyInCart.amount;
        state.cartTotal = alreadyInCart.price * alreadyInCart.amount;
        state.orderTotal = state.cartTotal + state.shipping;
        toast.success('Item updated in cart');
      } else {
        state.cartItems.push(cartProduct);
        toast.success('Item added to cart');
      }

      // console.log(cartProduct);

      localStorage.setItem('cart', JSON.stringify(state));
      console.log(state.cartItems);
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
