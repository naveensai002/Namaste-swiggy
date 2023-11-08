import React, { useCallback, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

export default function CartItems({ cartItems }) {
  const [newAmount, setNewAmount] = useState(1);

  const dispatch = useDispatch();

  // console.log(cartItems);

  const increaseAmount = useCallback(() => {
    setNewAmount((prev) => prev + 1);
  }, []);

  const decreaseAmount = useCallback(() => {
    setNewAmount((prev) => {
      if (prev < 2) {
        return (prev = 1);
      } else {
        return prev - 1;
      }
    });
  }, []);

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

          return (
            <div key={id} className='pt-4'>
              <div className='flex gap-x-6 bg-slate-200 items-center text-black tracking-widest leading-6 w-full justify-between pr-3 rounded-lg'>
                {imageId && (
                  <figure className='w-1/4 rounded-md object-cover ml-1'>
                    <img
                      src={imgCaro + imageId}
                      alt='cart-image'
                      className='h-32 w-full rounded-md shadow-md'
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
                    onClick={decreaseAmount}
                  >
                    -
                  </button>
                  <p className='font-semibold -tracking-widest'>{newAmount}</p>
                  <button
                    className='btn-sm btn-warning rounded-md shadow-md hover:btn-success'
                    onClick={increaseAmount}
                  >
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
