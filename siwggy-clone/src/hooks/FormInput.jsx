import React from 'react';
import { Form } from 'react-router-dom';

const FormInput = ({ name, label, type, placeholder, size }) => {
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text font-semibold'>{label}</span>
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`input input-bordered w-[20rem] `}
      />
    </div>
  );
};
export default FormInput;
