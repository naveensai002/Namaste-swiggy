import React, { useCallback, useState } from 'react';

import { CgCopyright } from 'react-icons/cg';
import { SiSwiggy } from 'react-icons/si';

import { useLoaderData } from 'react-router-dom';

export default function Footer() {
  const { cities } = useLoaderData();
  const [citi, setCiti] = useState(cities?.slice(6, cities?.length - 1));
  const [showFullCities, setShowFullCities] = useState(false);

  const handleShowFullCities = useCallback(() => {
    setShowFullCities((prev) => !prev);
  }, []);
  // console.log(showFullCities);
  // console.log(citi);
  return (
    <div>
      <div className='bg-slate-900 pb-12 text-slate-300 grid grid-cols-2 md:grid-col-3 lg:grid-cols-4 cursor-pointer '>
        <div className='ml-6 pt-2 '>
          <h3 className='flex items-center  mb-4 gap-x-2 font-semibold text-xl tracking-widest'>
            <span>{<SiSwiggy size={24} />}</span>Swiggy
          </h3>
          <span className='flex gap-x-2 link link-hover'>
            {<CgCopyright size={24} />} 2023 Bundl
          </span>
          <p className='tracking-wide link link-hover'>
            {' '}
            Technologies Pvt. Ltd
          </p>
        </div>

        <div className='flex flex-col gap-y-3 text-md pt-2'>
          <h3 className='font-bold text-xl tracking-wider link link-hover'>
            Company
          </h3>
          <p className='tracking-wide link link-hover'>About</p>
          <p className='tracking-wide link link-hover'>Careers</p>
          <p className='tracking-wide link link-hover'>Team</p>
          <p className='tracking-wide link link-hover'>Swiggy One</p>
          <p className='tracking-wide link link-hover'>Swiggy Instamart</p>
          <p className='tracking-wide link link-hover'>Swiggy Genie</p>
        </div>

        <div className='pt-2 flex flex-col gap-y-3 '>
          <h3 className='font-bold text-xl tracking-wider link link-hover '>
            Contact us
          </h3>
          <p className='tracking-wide link link-hover'>Help & Support</p>
          <p className='tracking-wide  link link-hover'>Partner with us</p>
          <p className='tracking-wide  link link-hover'>Ride with us</p>
          <div className='flex flex-col gap-y-3 pt-2  '>
            <h3 className='font-bold text-xl tracking-wider link link-hover '>
              Legal
            </h3>
            <p className='tracking-wide  link link-hover'>Terms & Conditions</p>
            <p className='tracking-wide link link-hover'>Cookie Policy</p>
            <p className='tracking-wide  link link-hover'>Privacy Policy</p>
          </div>
        </div>

        <div className='pt-2'>
          <h3 className='font-bold text-xl tracking-wider'>We deliver to:</h3>
          <p className='flex flex-col gap-y-4 pt-2 tracking-widest '>
            {cities &&
              cities.slice(0, 6).map((city) => {
                const { text, link } = city;
                return (
                  <p key={link} className='link link-hover'>
                    {text}
                  </p>
                );
              })}
          </p>
          <button
            onClick={handleShowFullCities}
            className='btn btn-sm btn-warning rounded-md mt-6'
          >
            Show more
          </button>
        </div>
      </div>
      <div className=' border-t border-gray-500 text-slate-300 bg-slate-900 font-semibold pt-4 pl-8 tracking-widest '>
        {showFullCities && (
          <>
            <h1 className='text-xl'>Other cities that we deliver</h1>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-y-3 ml-2 items-center justify-center pt-8'>
              {citi.map((citiData) => {
                const { text, link } = citiData;
                return (
                  <p
                    className='tracking-wide hover:shadow-sm link link-hover'
                    key={link}
                  >
                    {text}
                  </p>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
