import React from 'react';
import { getSpecificSearchResultData } from '../utils/api';
import { useLoaderData } from 'react-router-dom';
import { useParams, useNavigate, useNavigation } from 'react-router-dom';

import Loading from './Loading';

import { AiOutlineLeft } from 'react-icons/ai';
import { HiCurrencyRupee } from 'react-icons/hi2';
import { BsFillCartPlusFill } from 'react-icons/bs';

const searchSpecificData = (searchText) => {
  return {
    queryKey: ['searchSpecficData', searchText],
    queryFn: () => getSpecificSearchResultData(searchText),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    // console.log(params.id);
    const response = await queryClient.ensureQueryData(
      searchSpecificData(params.id)
    );
    return response?.data?.data?.cards[0]?.groupedCard?.cardGroupMap?.DISH
      ?.cards;
  };

export default function SearchResultsPage() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { id } = useParams();
  const data = useLoaderData();

  const isLoading = navigation.state === 'laoding';
  const isSubmitting = navigation.state === 'submitting';

  const imgCaro =
    '	https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/';

  return (
    <div className='flex flex-col gap-y-2 pt-8 pb-8 w-3/4 justify-center items-center pl-32 ml-32'>
      {/* input div */}
      <div className='w-3/4 p-4 pl-32'>
        <input
          type='search'
          className='cursor-text w-3/4 p-3 relative rounded-md border border-yellow-400 outline-none text-md text-center tracking-widest focus:bg-slate-200'
          placeholder='Search for restaurants and food'
          defaultValue={id}
        />
        <AiOutlineLeft
          onClick={() => navigate(-1)}
          className=' pt-1 top-[35%]  absolute left-[38%]  cursor-pointer hover:bg-black hover:shadow-md hover:rounded-full hover:p-1'
          size={28}
        />
      </div>
      {/* end of input div */}
      {/* buttons */}
      <div className='flex flex-row gap-x-4   pt-4  pb-6'>
        <button className=' tracking-widest btn-md btn-ghost rounded-full shadow-md '>
          Restaurants
        </button>
        <button className=' tracking-widest btn-md btn-ghost rounded-full shadow-md '>
          Dishes
        </button>
      </div>
      {/* end of buttons */}
      {/* main component starts here */}
      {isLoading ? (
        <Loading />
      ) : (
        <div className='grid text-black grid-cols-2 place-items-center gap-x-10 bg-slate-300 rounded-md  '>
          {data &&
            data.slice(1).map((item) => {
              const { info, restaurant } = item.card.card;
              console.log(info);
              const {
                category,
                id,
                imageId,
                inStock,
                isVeg,
                name: dishName,
                price,
                ratings,
              } = info;

              const {
                name,
                locality,
                sla: { deliveryTime },
              } = restaurant.info;

              // console.log('info', ratings);

              return (
                <div key={id} className='flex flex-col  p-3 w-full pt-6'>
                  <div className='mb-4 grid grid-cols-2 gap-y-4 bg-white  p-2 rounded-md '>
                    <div>
                      <h3 className='text-semibold tracking-widest'>{name}</h3>
                      <p className='flex gap-x-2 items-center tracking-widest'>
                        {ratings?.aggregatedRating?.rating || 4.1}{' '}
                        <span>
                          {' '}
                          <p>.{deliveryTime} MINS</p>
                        </span>{' '}
                      </p>
                    </div>
                    {imageId && (
                      <>
                        {' '}
                        <figure>
                          <img
                            src={imgCaro + imageId}
                            alt='photo'
                            className='h-32 rounded-lg w-full'
                          />
                        </figure>
                      </>
                    )}

                    <div className='pt-2'>
                      <h2 className='font-thin tracking-widest'>{dishName}</h2>
                      <p className='flex gap-x-2 ml-3 items-center font-thin'>
                        {' '}
                        <HiCurrencyRupee size={22} />
                        {price / 100}
                      </p>
                    </div>
                    <button
                      disabled={isSubmitting}
                      className='cursor-pointer tracking-widest btn btn-sm shadow-transparent rounded-lg mt-4  pr-6'
                    >
                      {' '}
                      <BsFillCartPlusFill size={18} /> Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      )}

      {/* main component ends here */}
    </div>
  );
}
