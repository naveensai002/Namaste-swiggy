import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';

import fetchData from '../utils/api';

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import HeroShimmer from '../Shimmer/HeroShimmer';
import Loading from './Loading';

export default function Hero() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const carouselContainer = useRef();

  const navigation = (dir) => {
    const container = carouselContainer.current;
    console.log(container.scrollLeft);
    const scrollAmount =
      dir === 'left'
        ? container.scrollLeft - (container.offsetWidth + 40)
        : container.scrollLeft + (container.offsetWidth + 40);

    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  const getBestOfferData = async () => {
    const res = await fetchData();
    setData(res.data.cards[0]?.card?.card?.imageGridCards.info);
  };

  useEffect(() => {
    setLoading(true);
    getBestOfferData();
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='pb-12 '>
          <div className='flex flex-row items-center justify-between'>
            <SectionTitle text='Best offers for you' />
            {/* button */}
            <div className='flex items-center gap-x-6 mr-8 text-3xl'>
              <BsFillArrowLeftCircleFill
                className='carouselLeftNav arrow'
                onClick={() => navigation('left')}
              />
              <BsFillArrowRightCircleFill
                className='carouselRighttNav arrow'
                onClick={() => navigation('right')}
              />
            </div>
          </div>
          <div className='flex gap-4 ' ref={carouselContainer}>
            {data &&
              data.map((item) => {
                const { accessibility, action, imageId } = item;

                const { altText } = accessibility;
                const { link, text } = action;

                const imgCaro =
                  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/';

                return (
                  <div
                    className='mt-12 ml-8 grid grid-cols-1 md:grid-cols-2'
                    key={item.id}
                  >
                    <div className=' card card-side max-w-[38rem] bg-base-300 shadow-xl '>
                      <figure>
                        <img
                          src={imgCaro + imageId}
                          className='h-full object-cover w-[22rem]'
                          alt='photo-carousel'
                        />
                      </figure>
                      <div className='card-body'>
                        <h2 className='card-title'>{altText}</h2>
                        <p>{text}</p>
                        <div className='card-actions  justify-end mt-4'>
                          <button className='btn btn-primary uppercase'>
                            ORDER NOW
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}
