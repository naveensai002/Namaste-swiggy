import React, { useEffect, useState } from 'react';

import { Filters, SectionTitle } from '../components/';
import fetchData from '../utils/api';
import { Image_CDN_Url } from '../utils/constant';

import { MdStars } from 'react-icons/md';
import { TiLocation } from 'react-icons/ti';

export default function OnlineFoodRestaurant() {
  const [items, setItems] = useState([]);

  const onlineFoodDeliveryRes = async () => {
    const response = await fetchData();
    setItems(
      response.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    // console.log(
    //   response.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    // );
    //filter data response.data.cards[4].card.card.sortConfigs
    //key,title,selected,

    //restaurant response.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
  };

  useEffect(() => {
    onlineFoodDeliveryRes();
  }, []);

  return (
    <div className='pl-14 ml-14 mb-8'>
      {/* title */}
      <SectionTitle text='Restaurants with online food delivery at your location' />
      {/* filter */}
      <Filters items={items} />
      {/* on the basis of filter we will filter the items state items items.filter((item) =>item.avgRating >4.5
      if no item then we will show some text and clear filter option */}
      {/* card */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {items &&
          items.map((item) => {
            const { info } = item;
            const {
              avgRating,
              costForTwo,
              cuisines,
              isOpen,
              locality,
              name,
              sla,
              aggregatedDiscountInfoV3,
              cloudinaryImageId,
            } = info;

            // console.log(info);
            const { header, subHeader } = aggregatedDiscountInfoV3;
            // console.log(header, subHeader);
            const { deliveryTime } = sla;
            const imgCaro =
              'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/';
            // console.log(action);
            return (
              <div key={item.id} className=' '>
                <div className='mt-12 ml-8 p-6 rounded-md'>
                  <div className=' relative card card-side w-64 bg-base-300 shadow-xl rounded-md  '>
                    <figure>
                      <img
                        src={Image_CDN_Url + cloudinaryImageId}
                        className='h-full rounded-lg object-cover  overscroll-none max-w-full'
                        alt='mind-image'
                      />
                    </figure>
                    <p className='btn btn-xs btn-warning absolute right-0 top-0 uppercase tracking-tight font-bold'>
                      {costForTwo}
                    </p>
                    <div className='card-body absolute bottom-0 bg-gradient-to-t from-black w-full rounded-md'>
                      <h3 className='text-white font-bold tracking-widest  '>
                        {header + subHeader}
                      </h3>
                    </div>
                  </div>
                  <div className='mt-4'>
                    <h2 className='font-semibold tracking-wider text-xl'>
                      {name}
                    </h2>
                    <div className='pt-2 flex gap-x-2 text-md items-center font-bold tracking-wider'>
                      <p className='text-green-500'>{<MdStars size={22} />}</p>
                      <span>{avgRating}</span>
                      <p className='flex items-center'>. {deliveryTime} mins</p>
                    </div>
                    <p className='flex gap-x-2 tracking-tighter pt-1 overflow-hidden'>
                      {cuisines.map((cuisine) => {
                        return <p key={cuisine}>{cuisine}</p>;
                      })}
                    </p>
                    <div className='flex  gap-24  items-center relative'>
                      <p className='flex gap-x-1 items-center text-sm font-bold tracking-widest pt-3 left-0'>
                        <TiLocation className='text-green-500 ' /> {locality}
                      </p>
                      <span className='btn bottom-0 absolute btn-warning btn-xs flex right-20 '>
                        {isOpen ? 'open' : 'closed'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
