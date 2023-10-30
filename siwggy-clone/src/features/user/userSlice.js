import { createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { redirect } from 'react-router-dom';

import { toast } from 'sonner';

const themes = {
  light: 'light',
  dark: 'dark',
};

const getThemeFromLS = () => {
  const theme = localStorage.getItem('theme') || themes.dark;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};
const getUserFromLS = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
};
// console.log(getUserFromLS());

const initialState = {
  user: getUserFromLS(),
  theme: getThemeFromLS(),
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log(action.payload);
      const user = action.payload;
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));

      redirect('/login');
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      toast.success('logged out successfully');
    },
    themeToggle: (state) => {
      const { light, dark } = themes;
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
      toast.success(`theme set to ${state.theme}`);
    },
  },
});
export const { loginUser, logoutUser, themeToggle } = userSlice.actions;
export default userSlice.reducer;

/**
 * all the items will set to local storage
 * login user
 * logout user
 * themetoggle =>navbar
 *
 * for user we will use firebase
 */
