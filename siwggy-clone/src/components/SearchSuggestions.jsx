import React from 'react';
import { Image_CDN_Url } from '../utils/constant';
import { Link } from 'react-router-dom';

export default function SearchSuggestions({ queryData }) {
  return (
    <div className='pt-8 flex flex-col gap-y-8 items-center justify-center w-full '>
      {queryData?.suggestions &&
        queryData?.suggestions.map((suggestion) => {
          // console.log(suggestion);
          const {
            category,
            cloudinaryId,
            cta,
            marketplace,
            metadata,
            subCategory,
            text,
            type,
          } = suggestion;
          const { link } = cta;
          return (
            <Link
              to={`searchResults/${text}`}
              key={text}
              className='w-3/4 h-32 hover:bg-slate-200 flex shadow-md rounded-md p-4 bg-slate-100 '
            >
              <figure className=''>
                <img
                  src={Image_CDN_Url + cloudinaryId}
                  alt='search-img'
                  className='h-24 w-32 object-center  rounded-md'
                />
              </figure>
              <div className='flex flex-col ml-6 pt-4 tracking-widest leading-8 '>
                <h3 className='text-black text-2xl font-thin'>{text}</h3>
                <p className='text-xl font-thin'>{subCategory}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
