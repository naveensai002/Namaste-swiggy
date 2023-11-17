import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { fetchSinglePageData } from '../utils/api';

import { MdStars } from 'react-icons/md';
import { CgTimelapse } from 'react-icons/cg';
import { HiCurrencyRupee } from 'react-icons/hi';
import { BiSolidOffer } from 'react-icons/bi';

import { SinglePageLoaded, TopPick } from '../components';
const singlePageQuery = (id) => {
  return {
    queryKey: ['singlePageQuery', id],
    queryFn: () => fetchSinglePageData(id),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singlePageQuery(params.id)
    );
    // console.log(response);
    return { response };
  };
//
// fetchData();
export default function SingleProductPage() {
  // const params = useParams();
  // const { id } = params;
  const { response } = useLoaderData();

  const {
    data: {
      data: { cards, statusMessage },
    },
  } = response;
  const {
    card: {
      card: { info },
    },
  } = cards[0];

  const offers = cards[1].card.card.gridElements.infoWithStyle.offers;
  const topPicks = cards[2].groupedCard.cardGroupMap.REGULAR.cards;
  const allData = cards[2].groupedCard.cardGroupMap.REGULAR;

  const singlePageData = topPicks[2].card.card.itemCards;

  // console.log('singelPage1', singlePageData);

  const singlePageData2 = allData.cards.map((item) => item.card);

  const singlePageData2N = singlePageData2.map((items) => items).slice(2);
  const itemsCardsData = singlePageData2N.map((item) => item.card.itemCards);
  // console.log('itemsCards', itemsCardsData[0]);

  const {
    aggregatedDiscountInfo,
    aggregatedDiscountInfoV2,
    areaName,
    availablity,
    avgRating,
    city,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    headerBanner,
    id,
    isOpen,
    labels,
    locality,
    logo,
    name,
    sla,
    slugString,
    slugs,
    totalRatingsString,
    veg,
    nudgeBanners,
    feeDetails,
  } = info;

  // console.log(info);
  //home/location/burgerking

  return (
    <>
      <div className='pl-24 pt-8 ml-24 pr-24 mr-24 text-xs breadcrumbs tracking-widest '>
        <ul>
          <li className='text-slate-500'>
            <Link to='/'>Home</Link>
          </li>
          <li className='text-slate-500'>
            <Link>{city}</Link>
          </li>
          <li className='font-semibold tracking-wider'>
            <Link>{name}</Link>
          </li>
        </ul>
      </div>
      {/* main header */}
      <div className='grid grid-cols-2 pt-8  place-items-center  pl-18 ml-18 mr-18 '>
        <div className='flex flex-col justify-center items-center cols-span-11 p-2 gap-y-3'>
          <h1 className='font-bold text-xl tracking-widest '>{name}</h1>
          <p className='flex gap-x-1'>
            {cuisines?.map((cuisine) => {
              return (
                <span
                  key={id}
                  className='text-slate-600 tracking-wide  gap-x-1 flex flex-row'
                >
                  {cuisine}
                </span>
              );
            })}
          </p>
          <p className='flex gap-x-1 font-light tracking-tight text-slate-600'>
            {areaName},
            <span className='font-semibold text-slate-600'>
              {sla?.lastMileTravel} km
            </span>
          </p>
        </div>
        <div className='shadow-md bg-slate-100 p-4 rounded-md border border-rose-100 '>
          <h3 className='flex gap-x-2 font-semibold'>
            <span className='text-green-500 font-bold'>
              <MdStars size={24} />
            </span>
            {avgRating}
          </h3>
          <p className='pt-3 font-semibold tracking-widest'>
            {totalRatingsString}
          </p>
        </div>
      </div>
      <div className='mr-12 pr-12  border-b border-dashed border-slate-300 ml-12 pl-12  pt-4'></div>
      <div className='flex flex-row gap-x-8 pl-32 ml-32 pt-6 font-bold'>
        <h1 className='uppercase flex flex-row items-center gap-x-2'>
          {' '}
          <span>
            <CgTimelapse size={22} />
          </span>
          {sla.deliveryTime} mins
        </h1>
        <h1 className='flex flex-row items-center gap-x-2'>
          {' '}
          <span>
            <HiCurrencyRupee size={22} />
          </span>
          {costForTwoMessage}
        </h1>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-6  place-items-center pl-32 pr-32 ml-32 gap-x-4'>
        {/* deal of the day */}
        {/*  offer icon 60% off upto rate icon 120 */}
        {/* use steakdeak | above rs 189 */}
        {offers?.map((offer) => {
          // console.log(offer);
          const {
            couponCode,
            description,
            expiryTime,
            header,
            logoBottom,
            offerLogo,
          } = offer.info;
          const imgCaro =
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/';

          return (
            <div
              key={couponCode}
              className='shadow-md rounded-xl mt-6 p-2 w-fit bg-slate-100 border border-slate-600'
            >
              <p className=' text-sm tracking-wide font-bold text-slate-700 flex gap-x-2 items-center'>
                <span className='text-amber-900'>
                  <img src={imgCaro + offerLogo} className='h-8 w-8' />
                </span>{' '}
                {header}
              </p>
              <div className='flex flex-row pt-2 items-center  text-xs font-semibold text-slate-400 tracking-tight gap-2'>
                <p>{couponCode}</p>
                <span className='font-bold'>|</span>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='mr-12 pr-12  border-b border-dashed border-slate-300 ml-12 pl-12  pt-4'></div>
      {/*  TOP PICKS */}
      {topPicks[1] && topPicks[1]?.card?.card.carousel && (
        <TopPick topPicks={topPicks} />
      )}
      {/* SinglePageLoaded */}
      {<SinglePageLoaded singlePageData={singlePageData} />}
      {<SinglePageLoaded singlePageData={itemsCardsData[0]} />}
    </>
  );
}
