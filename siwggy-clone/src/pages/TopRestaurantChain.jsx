import React, { useEffect, useState } from 'react';

import SectionTitle from '../components/SectionTitle';
import fetchData from '../utils/api';
import { Image_CDN_Url } from '../utils/constant';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdStars } from 'react-icons/md';
import { TiLocation } from 'react-icons/ti';

export default function TopRestaurantChain() {
  const [items, setItems] = useState([]);

  const getTopRestaurant = async () => {
    const response = await fetchData();
    setItems(
      response.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
    // console.log(
    //   response.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //     .restaurants
    // );
    //response.data.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants
  };

  useEffect(() => {
    getTopRestaurant();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className='pl-20 ml-10 pr-14  '>
      <SectionTitle text='Top Restaurant chains' />
      <div className='  '>
        <Carousel
          autoPlay={false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          containerClass='carousel-container'
          responsive={responsive}
          showDots={false}
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px pb-8 '
        >
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
              const { deliveryTime } = sla;
              const imgCaro =
                'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/';
              // console.log(action);
              return (
                <div key={item.id} className='mt-12 ml-8 p-6  '>
                  <div className=' relative card card-side w-64 bg-base-300 shadow-xl rounded-md '>
                    <figure>
                      <img
                        src={Image_CDN_Url + cloudinaryImageId}
                        className='h-full rounded-lg object-cover  overscroll-none max-w-full'
                        alt='mind-image'
                      />
                    </figure>
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
                    <p className='flex gap-x-1 items-center text-sm font-bold tracking-widest pt-3'>
                      <TiLocation /> {locality}
                    </p>
                  </div>
                </div>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
}
