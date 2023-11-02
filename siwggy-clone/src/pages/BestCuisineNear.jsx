import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { SectionTitle } from '../components';

export default function BestCuisineNear() {
  const { bestCuisineNearMe } = useLoaderData();

  return (
    <div className='pl-12 ml-12 pr-12 mr-4 pt-12'>
      <SectionTitle text='Best Cuisines Near Me' />
      <div className='grid grid-cols-1 md:grid-cols-2 pt-8 lg:grid-cols-4 p-2 gap-4'>
        {bestCuisineNearMe.map((bestCuisine) => {
          const { text, link } = bestCuisine;
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
