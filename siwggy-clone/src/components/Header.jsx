import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/user/userSlice';

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  // console.log(user[0].displayName);
  /**
   * if user then only hello + userName and logout button
   * on pressing logout we should empty the cart (dispatch clear cart action)
   * if not user
   * Login /Register
   */
  return (
    <div className=' flex flex-row items-center gap-x-6 bg-base-100 text-white justify-end p-1'>
      {user ? (
        <div className='flex flex-row gap-4 font-semibold text-sm items-center text-rose-500'>
          <h3>Hello</h3>
          <span className='capitalize'>
            {user?.[0]?.displayName || 'Naveen'}
          </span>
          <button
            className='btn btn-outline btn-warning btn-xs '
            onClick={() => dispatch(logoutUser())}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className='flex gap-x-4 p-2 '>
          <Link to='/login'>
            <label className='link link-hover link-secondary capitalize'>
              Login
            </label>
          </Link>
          <Link to='/register'>
            <label className='link link-hover link-secondary capitalize'>
              Register
            </label>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;

/**
 * Hello username
 * login /signup button
 *
 */
