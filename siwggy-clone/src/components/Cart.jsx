import React, { useDebugValue } from 'react';
import { TbShoppingCartFilled } from 'react-icons/tb';

import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SectionTitle from './SectionTitle';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import Payment from './Checkout';

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state?.user?.user);

  if (cartItems.length < 1) {
    return (
      <div className='pt-8 ml-32 mb-24'>
        <div className='text-sm breadcrumbs'>
          <ul>
            <li>
              <Link to='/'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='w-4 h-4 mr-2 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                  ></path>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='w-4 h-4 mr-2 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                  ></path>
                </svg>
                About
              </Link>
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='w-4 h-4 mr-2 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                ></path>
              </svg>
              Cart
            </li>
          </ul>
        </div>

        <div className='grid place-items-center gap-y-12'>
          <SectionTitle
            className=' text-rose-500'
            text='Oops 😐 your cart is empty'
          />

          <Link
            to='/'
            className='text-xl btn btn-md btn-warning rounded-md shadow-md '
          >
            Order Now
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className='pt-8 mb-28 ml-32'>
      <div className='text-sm breadcrumbs mt-1 mb-4'>
        <ul>
          <li>
            <Link to='/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='w-4 h-4 mr-2 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                ></path>
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='w-4 h-4 mr-2 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                ></path>
              </svg>
              About
            </Link>
          </li>
          <li>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='w-4 h-4 mr-2 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              ></path>
            </svg>
            Cart
          </li>
        </ul>
      </div>
      <div className='flex gap-x-6 items-center  justify-between mr-32 mb-12'>
        <SectionTitle text='Your Cart' />
        {/* <TbShoppingCartFilled size={26} className='text-rose-500' /> */}
        <button
          className=' btn btn-outline btn-warning btn-sm  font-thin rounded-md shadow-md text-lg tracking-widest'
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
      <div className='grid gap-8 lg:grid-cols-12'>
        <div className='lg:col-span-8 '>
          <CartItems cartItems={cartItems} />
        </div>
        <div className='lg:col-span-4 lg:pl-4 flex flex-col items-center w-full'>
          <div className='card w-96 mr-12 bg-base-300 shadow-xl'>
            <h1 className='text-center pt-2 text-black text-xl items-center bg-gray-300 tracking-widest font-thin'>
              Bill details
            </h1>
            <CartTotal />{' '}
            {user ? (
              <button
                // to='/checkout'
                className='mt-8 btn btn-success btn-outline w-3/4 tracking-widest rounded-md ml-12 mb-4'
                onClick={Payment()}
              >
                proceed for payment
              </button>
            ) : (
              <Link to='/login' className='mt-8 btn btn-error w-3/4  '>
                Sign in to checkout
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
