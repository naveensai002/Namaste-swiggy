import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './components/AppLayout';

import {
  ErrorElement,
  Header,
  Navbar,
  About,
  Cart,
  InstaMart,
} from './components';

import Login from './pages/Login';
import Register from './pages/Register';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { action as RegisterAction } from './pages/Register';
import { action as LoginAction } from './pages/Login';

import store from './store/store';

import { Landing, Error } from './pages';
import { auth } from './firebase';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './features/user/userSlice';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 100 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing />, errorElement: <ErrorElement /> },
      {
        path: '/cart',
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/about',
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/instamart',
        element: <InstaMart />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    action: LoginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    action: RegisterAction(store),
  },
]);

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            userId: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
      }
    });
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
export default App;
