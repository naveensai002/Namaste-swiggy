import React, { useCallback, useState } from 'react';
import { HiCurrencyRupee } from 'react-icons/hi';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';

export default function SinglePageLoaded(singlePageData) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showAmountBtn, setShowAmountBtn] = useState(true);
  const [amount, setAmount] = useState(1);

  const toggleShowBtn = useCallback(() => {
    setShowAmountBtn((prev) => !prev);
  }, []);

  const handleIncAmount = useCallback(() => {
    setAmount((prev) => prev + 1);
  }, []);

  const handleDecAmount = useCallback(() => {
    setAmount((prev) => prev - 1);
  }, []);

  return (
    <>
      {singlePageData.singlePageData &&
        singlePageData.singlePageData.map((data) => {
          // console.log(data);
          const {
            id,
            category,
            description,
            inStock,
            isVeg,
            itemAttribute,
            name,
            price,
            defaultPrice,
            imageId,
            ratings,
          } = data.card.info;
          // console.log(defaultPrice);
          const imgCaro =
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/';

          const cartProduct = {
            id,
            category,
            description,
            inStock,
            name,
            price,
            defaultPrice,
            imageId,
            amount: 1,
          };

          return (
            <div key={id} className='pl-32 pr-32 w-3/4 mb-10 ml-32'>
              <div className='grid mt-8 card card-side bg-slate-100  shadow-xl '>
                <h2 className=' rounded-md p-1 tracking-widest  ml-32 font-bold capitalize mt-6 bg-transparent btn btn-md w-fit text-rose-400 border-none outline-none'>
                  {category}
                </h2>
                {/* green dot */}
                <div className='grid grid-cols-2 place-items-center pb-6 tracking-wider pt-2 font-semibold text-black'>
                  <div className='gap-y-2 flex flex-col ml-8'>
                    <h3>{name}</h3>
                    <p className='text-slate-500'>{description}</p>
                    <p className='flex flex-row gap-x-2'>
                      <span>
                        <HiCurrencyRupee size={22} />
                      </span>
                      {price ? price / 100 : defaultPrice / 100}
                    </p>
                    <p className=''>
                      {`${inStock >= 1 ? 'In stock ' : 'Out of stock'}`}
                      <span className='font-bold  rounded-full ml-2 btn-xs btn-warning'>
                        {' '}
                        {inStock}
                      </span>
                    </p>
                    {/* {showAmountBtn ? ( */}
                    <button
                      // onClick={toggleShowBtn}
                      className='tracking-widest text-lg font-semibold mt-4 btn-md btn-ghost btn-outline rounded-lg shadow-md  text-black'
                      onClick={() => {
                        dispatch(addItemToCart({ cartProduct }));
                        setTimeout(() => {
                          navigate('/cart');
                        }, 2000);
                      }}
                    >
                      {' '}
                      Add
                    </button>
                    {/* ) : (
                      <div className='flex gap-x-4 pt-3'>
                        <button
                          className='btn-sm btn-warning shadow-md rounded-md font-bold text-xl'
                          onClick={handleDecAmount}
                        >
                          -
                        </button>
                        <p className='font-bold pt-1'>{amount}</p>
                        <button
                          className='btn-sm btn-warning shadow-md rounded-md font-bold text-xl'
                          onClick={handleIncAmount}
                        >
                          +
                        </button>
                      </div>
                    )} */}
                  </div>
                  <div className='cursor-pointer relative w-3/4'>
                    <figure className='rounded-md '>
                      <img
                        src={imgCaro + imageId}
                        className='h-38  w-3/4 rounded-md  hover:opacity-50 shadow-gray-400'
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
