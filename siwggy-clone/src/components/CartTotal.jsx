import React from 'react';
import { useSelector } from 'react-redux';

export default function CartTotal() {
  const { cartTotal, itemsInCart, orderTotal, shipping } = useSelector(
    (state) => state?.cart
  );
  return (
    <div className='card items-center base-300 font-semibold tracking-widest leading-6'>
      <div className='card-body'>
        <h1 className=' text-lg'>
          Total Items :
          <span className='ml-6 text-black text-sm'>{itemsInCart}</span>{' '}
        </h1>
        <h3 className=' text-lg'>
          Cart Total :{' '}
          <span className='ml-6 text-black text-sm'>
            ${Number(cartTotal / 100)}
          </span>{' '}
        </h3>
        <h3 className=' text-lg'>
          Shipping :{' '}
          <span className='ml-8 text-black text-sm'>${shipping}</span>
        </h3>
        <h1 className=' text-lg'>
          Order Total :
          <span className='ml-4 text-black text-sm'>
            ${Number(orderTotal / 100)}
          </span>{' '}
        </h1>
      </div>
    </div>
  );
}
