import React from 'react';

export default function HeroShimmer() {
  return (
    <div className='lg:w-3/4 md:w-72 md:m-5 w-60 h-72 p-4 lg:m-0 animate-pulse'>
      <div className='h-32 w-32 m-4 bg-slate-200 rounded-sm '></div>
      <h1 className='h-2 w-32 m-4 bg-slate-200 rounded-sm'></h1>
      <h1 className='h-2 w-32 m-4 bg-slate-200 rounded-sm'></h1>
      <div className='flex w-32 m-4 justify-around'>
        <h1 className='h-4 w-20 mr-2 bg-slate-200 rounded-sm'></h1>
        <h1 className='h-4 w-20 mr-2 bg-slate-200 rounded-sm'></h1>
        <h1 className='h-4 w-20  bg-slate-200  rounded-sm'></h1>
      </div>
    </div>
  );
}
