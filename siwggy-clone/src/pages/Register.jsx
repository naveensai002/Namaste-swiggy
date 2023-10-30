import React from 'react';
import { Link, Form, redirect } from 'react-router-dom';

import FormInput from '../hooks/FormInput';
import { toast } from 'sonner';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase';
import { loginUser } from '../features/user/userSlice';
import GoogleButton from '../hooks/GoogleButton';

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data.username);
    const { username, email, password } = data;
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
        .then(signInWithEmailAndPassword(auth, email, password))
        .then(
          updateProfile(auth.currentUser, {
            displayName: username,
          })
        );
      console.log(response?.user?.providerData);
      store.dispatch(loginUser(response?.user?.providerData));

      toast.success('Registered Successfully');
      return redirect('/login');
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials';
      toast.error(errorMessage);
    }
    return null;
  };

const Register = () => {
  return (
    <section className='h-screen grid place-items-center bg-slate-200'>
      <Form method='post' className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body items-center text-center mb-4'>
          <h1 className='font-semibold text-2xl uppercase mb-4'>Register</h1>

          <FormInput
            label='Username'
            type='text'
            placeholder='username'
            name='username'
          />
          <FormInput
            label='Email'
            type='email'
            name='email'
            placeholder='enter your email'
          />
          <FormInput
            label='Password'
            name='password'
            type='password'
            placeholder='passcode'
          />
          <div className='card-actions mt-4 flex flex-col gap-y-4'>
            <button className='btn btn-primary w-[18rem]'>Register </button>

            <GoogleButton text='Login with google' />
          </div>

          <p className='text-md  mt-4 font-semibold'>Already a member? {''}</p>
          <Link to='/login'>
            <span className='link link-hover hover:text-rose-500 text-xl'>
              Login
            </span>
          </Link>
        </div>
      </Form>
    </section>
  );
};

export default Register;
