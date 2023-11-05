import React from 'react';
import { HiCurrencyRupee } from 'react-icons/hi';

export default function SinglePageLoaded(singlePageData) {
  // console.log(singlePageData.singlePageData);

  return (
    <>
      {singlePageData.singlePageData.map((data) => {
        // console.log(data);
        const {
          id,
          category,
          description,
          inStock,
          isVeg,
          itemAttribute,
          name,
          defaultPrice,
          imageId,
          ratings,
        } = data.card.info;
        console.log(defaultPrice);
        const imgCaro =
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/';

        return (
          <div key={id} className='pl-32 pr-32 w-3/4 mb-10'>
            <div className='grid mt-8 card card-side bg-slate-100  shadow-xl '>
              <h2 className=' rounded-md p-1 tracking-widest  ml-32 font-bold capitalize mt-6 bg-transparent btn btn-md w-fit text-rose-400 border-none outline-none'>
                {category}
              </h2>
              {/* green dot */}
              <div className='grid grid-cols-2 place-items-center pb-6 tracking-wider pt-2 font-semibold'>
                <div className='gap-y-2 flex flex-col ml-8'>
                  <h3>{name}</h3>
                  <p className='text-slate-500'>{description}</p>
                  <p className='flex flex-row gap-x-2'>
                    <span>
                      <HiCurrencyRupee size={22} />
                    </span>
                    {defaultPrice / 100}
                  </p>
                  <p className=''>
                    {`${inStock >= 1 ? 'In stock ' : 'Out of stock'}`}
                    <span className='font-bold  rounded-full ml-2 btn-xs btn-warning'>
                      {' '}
                      {inStock}
                    </span>
                  </p>
                </div>
                <div className='cursor-pointer relative'>
                  <figure className='rounded-md '>
                    <img
                      src={imgCaro + imageId}
                      className='h-32  w-32 rounded-md  hover:opacity-50'
                    />
                  </figure>
                  <p className='uppercase absolute top-0 right-0 bg-rose-500 rounded-bl-md  p-1 opacity-1 hover:opacity-100 hover:bg-rose-400 tracking-wider '>
                    Add
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
