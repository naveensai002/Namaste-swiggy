import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { SectionTitle } from '../components';

export default function BestPlaces() {
  const { bestPlacesData } = useLoaderData();
  // console.log(bestPlacesData.brands);

  return (
    <div className='pl-12 ml-12 pr-12 mr-4'>
      <SectionTitle text='Best places to eat across cities' />
      <div className='grid grid-cols-1 md:grid-cols-2 pt-8 lg:grid-cols-4 p-2 gap-4'>
        {bestPlacesData.brands.map((data) => {
          const { text, link } = data;
          return (
            <Link key={link} to={link}>
              <button
                className='btn btn-md btn-ghost p-2 rounded-md tracking-wide 
              font-semibold '
              >
                {text}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
