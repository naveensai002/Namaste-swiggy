import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/user/userSlice';
import cartSlice from '../features/cartSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
});

export default store;
