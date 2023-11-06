import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { useSelector } from 'react-redux';

import fetchData from '../utils/api';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function MindPage() {
  const user = useSelector((state) => state?.user?.user?.username || 'naveen');
  const [items, setItems] = useState([]);

  const getWhatsonMind = async () => {
    const response = await fetchData();
    setItems(response?.data?.cards[1]?.card?.card?.imageGridCards?.info);
    // console.log(response.data.cards[1].card.card.imageGridCards.info);
    //response.data.cards[1].card.card.imageGridCards.info
  };

  useEffect(() => {
    getWhatsonMind();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
    <div className='pb-12 pl-14 ml-14 pr-16  '>
      <SectionTitle text={`${user} what's on your mind?`} />
      <div className=' '>
        <Carousel
          autoPlay={true}
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
              const { accessibility, action, imageId } = item;
              const { altText } = accessibility;
              const { link, text } = action;
              const imgCaro =
                'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/';
              // console.log(action);
              return (
                <div
                  key={item.id}
                  className='mt-12 ml-8 p-6 gap-1 cursor-pointer rounded-md shadow-md '
                >
                  <div className='w-full h-fit bg-base-300  rounded-md  hover:transition-transform ease-in duration-300 '>
                    <figure>
                      <img
                        src={imgCaro + imageId}
                        className=''
                        alt='mind-image'
                      />
                    </figure>
                  </div>
                  {/* <div className='card-body'>
                  <h2 className='card-title'>{text}</h2>
                </div> */}
                </div>
              );
            })}
        </Carousel>
      </div>
      <div className='border border-b mb-4 mr-4 border-yellow-200'></div>
    </div>
  );
}
