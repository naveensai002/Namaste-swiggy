import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { SectionTitle } from '../components';

export default function ExploreResNearMe() {
  const { exploreEveryResNearMe } = useLoaderData();
  // console.log(exploreEveryResNearMe);
  return (
    <div className='pl-12 ml-12 pr-12 mr-4 pt-8 pb-4'>
      <SectionTitle text='Explore Every Restaurants Near Me' />
      <div className='flex flex-row justify-center gap-32 pt-12 p-2 '>
        {exploreEveryResNearMe.map((exploreRes) => {
          const { text, link } = exploreRes;
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
