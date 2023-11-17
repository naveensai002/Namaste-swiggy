import React, { useCallback, useState, useRef } from 'react';

import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  editCartItem,
  addItemToCart,
} from '../features/cart/cartSlice';

export default function CartItems({ cartItems }) {
  const dispatch = useDispatch();
  const amountRef = useRef();

  const imgCaro =
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/';

  return (
    <div>
      {cartItems.length >= 1 &&
        cartItems.map((item) => {
          const {
            amount,
            category,
            description,
            id,
            imageId,
            name,
            price,
            inStock,
          } = item;

          const cartProduct = {
            amount: 1,
            id: id,
            name,
            price: Number(price) / 100 || 90,
          };

          return (
            <div key={id} className='pt-4'>
              <div className='flex gap-x-6 	bg-base-300 items-center text-black tracking-widest leading-6 w-full justify-between pr-3 rounded-lg'>
                {imageId && (
                  <figure className='w-1/4 rounded-md object-cover m-2 '>
                    <img
                      src={imgCaro + imageId}
                      alt='cart-image'
                      className='h-32 w-full rounded-md shadow-md '
                    />
                  </figure>
                )}
                <div className='w-2/4 '>
                  <h3 className='tracking-widest'>{name}</h3>
                  <span>{category}</span>
                  <h2>{description}</h2>
                  <p className=' mt-2 rounded-md mb-2 btn-primary  p-1 w-1/4 text-center font-semibold tracking-widest'>
                    Rs {''} {Number(price) / 100 || 90}
                  </p>
                </div>
                <div className='flex gap-x-3 items-center'>
                  <button
                    className=' btn-sm btn-warning rounded-md shadow-md hover:btn-success'
                    onClick={() =>
                      dispatch(editCartItem({ cartProduct, type: 'dec' }))
                    }
                  >
                    -
                  </button>
                  <p className='font-semibold -tracking-widest' ref={amountRef}>
                    {amount}
                  </p>
                  <button
                    className='btn-sm btn-warning rounded-md shadow-md hover:btn-success'
                    // onClick={() => dispatch(editCartItem({ id, type: 'inc' }))}
                    onClick={() =>
                      dispatch(editCartItem({ cartProduct, type: 'inc' }))
                    }
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    className='btn btn-outline btn-error text-black tracking-widest rounded-md btn-sm '
                    onClick={() => dispatch(removeFromCart({ id }))}
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
