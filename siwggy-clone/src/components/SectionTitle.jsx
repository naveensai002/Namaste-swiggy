import React from 'react';

export default function SectionTitle({ text }) {
  return (
    <div className=' grid place-items-start'>
      <h3 className='text-2xl font-medium tracking-widest capitalize'>
        {text}
      </h3>
    </div>
  );
}
