import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export default function Store() {
  const { downloadLinks } = useLoaderData();
  // console.log(downloadLinks);
  const {
    androidAppImage,
    androidAppLink,
    id,
    iosAppImage,
    iosAppLink,
    title,
  } = downloadLinks;
  const img =
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/';
  return (
    <div className=' ml-12 pl-12 mr-12 pr-12 flex flex-row items-center pt-12 gap-x-12 bg-slate-100 pb-6'>
      <h3 className='hidden lg:flex text-xl font-semibold tracking-wider '>
        {title}
      </h3>
      <div className='flex flex-row gap-x-6'>
        <Link to={androidAppLink}>
          <img src={img + androidAppImage} className='h-12 w-fit' />
        </Link>
        <Link to={iosAppLink}>
          <img src={img + iosAppImage} className='h-12 w-fit' />
        </Link>
      </div>
    </div>
  );
}
