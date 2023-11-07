import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

export default function CartItems({ cartItems }) {
  const dispatch = useDispatch();
  // console.log(cartItems);

  const imgCaro =
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/';

  return (
    <div className=''>
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
          return (
            <div key={id} className='pt-4 '>
              <div className='flex gap-x-6 bg-slate-200 items-center text-black tracking-widest leading-6 w-full justify-between pr-3'>
                {imageId && (
                  <figure className='w-1/4 rounded-md object-cover'>
                    <img
                      src={imgCaro + imageId}
                      alt='cart-image'
                      className='h-32 w-full rounded-md shadow-md'
                    />
                  </figure>
                )}
                <div className='w-2/4'>
                  <h3>{name}</h3>
                  <span>{category}</span>
                  <h2>{description}</h2>
                  <p>
                    Rs {''} {Number(price) / 100 || 90}
                  </p>
                </div>
                <div className='flex gap-x-3 items-center'>
                  <button className=' btn-sm btn-warning rounded-md shadow-md'>
                    -
                  </button>
                  <p className='font-semibold -tracking-widest'>{amount}</p>
                  <button className='btn-sm btn-warning rounded-md shadow-md'>
                    +
                  </button>
                </div>
                <div>
                  <button
                    className='btn-success bg-rose-500 text-black tracking-widest rounded-md btn-sm '
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
