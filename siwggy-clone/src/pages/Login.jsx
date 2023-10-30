import React from 'react';
import FormInput from '../hooks/FormInput';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { auth, provider } from '../firebase';
import GoogleButton from '../hooks/GoogleButton';

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const { username, email, password } = data;
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
        .then(signInWithEmailAndPassword(auth, email, password))
        .then(
          updateProfile(auth.currentUser, {
            displayName: username,
          })
        );

      store.dispatch(loginUser(response?.user?.providerData));
      toast.success('Login successful');

      return redirect('/');
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials';
      toast.error(errorMessage);
    }
    return null;
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const google = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        dispatch(loginUser(user?.providerData));
        toast.success('login successfull');
        return navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <section className='h-screen grid place-items-center bg-slate-200'>
      <Form method='post' className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body items-center text-center mb-4'>
          <h1 className='font-semibold text-2xl uppercase mb-4'>Login</h1>

          <FormInput
            label='Email'
            type='email'
            name='identifier'
            placeholder='enter your email'
          />
          <FormInput
            label='Password'
            name='password'
            type='password'
            placeholder='passcode'
          />
          <div className='card-actions mt-4 flex flex-col gap-y-4'>
            <button className='btn btn-primary w-[18rem]'>Login </button>
            <GoogleButton text='Login with google' onClick={google} />
          </div>

          <p className='text-md  mt-4 font-semibold'>Not a member? {''}</p>
          <Link to='/register'>
            <span className='link link-hover hover:text-rose-500 text-xl'>
              Register
            </span>
          </Link>
        </div>
      </Form>
    </section>
  );
};

export default Login;
