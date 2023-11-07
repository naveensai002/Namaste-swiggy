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
      // console.log(action.payload);
      const { cartProduct } = action.payload;

      // function to check if the item already exist in cart
      // if already exists then only change the amount in card,orderTotal,price
      // if no then add item to the cart and update the amount,orderTotal,price

      const alreadyInCart = state.cartItems.find(
        (item) => item.id === cartProduct.id
      );
      if (alreadyInCart) {
        // console.log('already in cart');
        alreadyInCart.amount += cartProduct.amount;
        state.itemsInCart += cartProduct.amount;
        state.cartTotal = alreadyInCart.price * cartProduct.amount;
        state.orderTotal = state.cartTotal + state.shipping;
        toast.success('Item updated in cart');
      } else {
        state.cartItems.push(cartProduct);
        state.itemsInCart += cartProduct.amount;
        state.cartTotal = cartProduct.price * cartProduct.amount;
        state.orderTotal = state.cartTotal + state.shipping;
        toast.success('Item added to cart');
      }

      // console.log(cartProduct);

      localStorage.setItem('cart', JSON.stringify(state));
      // console.log(state.cartItems);
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const product = state.cartItems.find((item) => item.id === id);
      const filterItems = state.cartItems.filter((item) => item.id !== id);
      state.cartItems = filterItems;
      state.itemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      state.orderTotal = state.cartTotal + state.shipping;
      localStorage.setItem('cart', JSON.stringify(state));
      toast.success('Item removed');
    },
    clearCart: (state) => {
      (state.cartItems = []),
        (state.itemsInCart = 0),
        (state.cartTotal = 0),
        (state.orderTotal = 0),
        localStorage.removeItem('cart'),
        toast.success('cart cleared successfully');
    },
  },
});

export const { addItemToCart, clearCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
