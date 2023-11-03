import React, { useEffect } from 'react';
import SectionTitle from './SectionTitle';
// import CarouselWrapper from '../hooks/CarouselWrapper';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function TopPick({ topPicks }) {
  const { carousel } = topPicks[1].card.card;
  // console.log(carousel);
  // console.log(carousel.creativeId);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
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
    <>
      <div className='pl-32 mr-32 mt-8 mb-6'>
        <SectionTitle text='Top picks' />
        <div className=''>
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
            {carousel.map((cData) => {
              const { bannerId, dish, title, creativeId } = cData;
              return (
                <div key={bannerId} className='relative '>
                  <figure className=' p-2'>
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/${creativeId}`}
                      alt=''
                      className='p-2'
                    />
                  </figure>
                  {/* on click add to cart */}
                  <button className='absolute bottom-6 right-6 bg-white  rounded-md w-[6rem] h-8 text-green-700 tracking-widest'>
                    <span className='absolute font-bold -top-2 right-0'>+</span>
                    ADD
                  </button>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
