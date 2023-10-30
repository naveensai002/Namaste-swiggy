import React from 'react';

import { useRouteError, Link } from 'react-router-dom';

import { toast } from 'sonner';

const ErrorElement = () => {
  const error = useRouteError();
  // console.log(error.error.message);
  toast.error(error?.error?.message);
  return (
    <div className='flex flex-col gap-y-8 items-center justify-center min-h-screen'>
      <h1 className='text-rose-500 text-4xl'>Uh 😐 ohh! There was an error</h1>
      <Link to='/' className='btn btn-primary w-1/4'>
        Try again
      </Link>
    </div>
  );
};

export default ErrorElement;
