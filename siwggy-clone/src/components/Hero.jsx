import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';

import fetchData from '../utils/api';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

    const rightBtn = document.getElementsByClassName('carouselRighttNav');

    rightBtn.addEventListener('click', () => {
      container.scrollLeft -= 900;
    });
    // console.log(container.scrollLeft);
    const scrollAmount =
      dir === 'left'
        ? container.scrollLeft - (container.offsetWidth + 400)
        : container.scrollLeft + (container.offsetWidth + 400);

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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='pb-12 '>
          <div className='flex flex-row items-center justify-between'>
            <SectionTitle text='Best offers for you' />
            {/* button */}
            {/* <div className='flex items-center gap-x-6 mr-8 text-3xl'>
              <BsFillArrowLeftCircleFill
                className='carouselLeftNav arrow'
                onClick={() => navigation('left')}
              />
              <BsFillArrowRightCircleFill
                className='carouselRighttNav arrow'
                onClick={() => navigation('right')}
              />
            </div> */}
          </div>
          <div className=' gap-4 ' ref={carouselContainer}>
            <Carousel
              autoPlay={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              containerClass='carousel-container'
              responsive={responsive}
              showDots={true}
              dotListClass='custom-dot-list-style'
              itemClass='carousel-item-padding-40-px'
            >
              {data &&
                data.map((item) => {
                  const { accessibility, action, imageId } = item;

                  const { altText } = accessibility;
                  const { link, text } = action;

                  const imgCaro =
                    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/';

                  return (
                    <div className='mt-12 ml-8 p-6 ' key={item.id}>
                      <div className=' card card-side max-w-[38rem] bg-base-300 shadow-xl  '>
                        <figure>
                          <img
                            src={imgCaro + imageId}
                            className='h-full object-cover w-full'
                            alt='photo-carousel'
                          />
                        </figure>
                        {/* <div className='card-body'>
                          <h2 className='card-title'>{altText}</h2>
                          <p>{text}</p>
                          <div className='card-actions  justify-end mt-4'>
                            <button
                              className='btn btn-primary uppercase'
                              disabled={true}
                            >
                              ORDER NOW
                            </button>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  );
                })}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
}
