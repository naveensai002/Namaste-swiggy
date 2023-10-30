import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  if (error.status) {
    return (
      <main className='flex flex-row min-h-screen items-center justify-center'>
        <div className='text-center '>
          <p className='text-8xl font-semibold text-secondary'>404</p>
          <h1 className='-tracking-tight mt-4 font-bold text-2xl sm:text-5xl'>
            page not found
          </h1>
          <p className='mt-5  text-md tracking-wide font-semibold font-mono leading-7'>
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className='mt-10 p-4 '>
            <Link to='/' className='btn btn-secondary '>
              Go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className='flex  min-h-screen flex-col items-center justify-center'>
      <h4 className='text-center font-bold text-4xl'>There was an error...</h4>
      <button className='btn btn-primary mt-12'>
        <Link to='/'>Back home</Link>
      </button>
    </main>
  );
};

export default Error;
