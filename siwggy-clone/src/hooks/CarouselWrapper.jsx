import React, { Children } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CarouselWrapper({ Children }) {
  console.log(Children);
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
      {Children}
    </Carousel>
  );
}
