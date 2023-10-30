import React from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function GoogleButton({ type, onClick, text, disabled }) {
  return (
    <div className='btn btn-primary w-[18rem] '>
      <button type={type} onClick={onClick} disabled={disabled}>
        <p className='flex gap-x-4 font-bold text-md items-center'>
          <FcGoogle size={24} /> {text}
        </p>
      </button>
    </div>
  );
}
