import React, { useCallback, useState } from 'react';

import { NavLink, useOutletContext } from 'react-router-dom';

import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoFastFoodSharp } from 'react-icons/io5';
import { CgSearch } from 'react-icons/cg';

import NavLinks from './NavLinks';

import { useDispatch, useSelector } from 'react-redux';
import { themeToggle } from '../features/user/userSlice';

const Navbar = ({ showSearchPage, toggleSearchPage }) => {
  const itemsInCart = useSelector((state) => state.cart.itemsInCart);
  // console.log(showSearchPage);

  const [showBtn, setShowBtn] = useState(false);

  const dispatch = useDispatch();
  const btnToggle = useCallback(() => setShowBtn(!showBtn), [showBtn]);

  const handleTheme = () => {
    dispatch(themeToggle());
  };

  return (
    <div className='navbar bg-base-200 flex flex-row justify-between sticky top-0 z-10'>
      <div className='navbar-start'>
        <NavLink to='/' className='flex'>
          <h3 className='hidden lg:flex btn text-2xl items-center font-bold tracking-widest font-mono text-rose-700'>
            Foodio
          </h3>
          <IoFastFoodSharp size={42} />
        </NavLink>

        <div className='dropdown'>
          <label
            tabIndex={0}
            className='btn btn-ghost btn-circle lg:hidden'
            onClick={btnToggle}
          >
            <FaBarsStaggered size={24} />
          </label>
          {showBtn && (
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52 flex flex-col gap-y-4 show-md hover:shadow-xl p-3 gap-2'
            >
              <NavLinks setShowBtn={setShowBtn} />
            </ul>
          )}
        </div>
      </div>
      <div className='navbar-center hidden md:flex lg:flex'>
        <ul className='menu menu-horizontal px-1 gap-2'>
          <NavLinks setShowBtn={setShowBtn} />
        </ul>
      </div>

      <div className='navbar-end flex gap-x-6 '>
        <div
          className='mr-32 p-2 flex items-center gap-x-2 cursor-pointer'
          onClick={toggleSearchPage}
        >
          <CgSearch className=' pt-1 ' size={24} />
          <button className='capitalize tracking-wider'>search</button>
        </div>
        <label className='swap swap-rotate'>
          <input type='checkbox' onChange={handleTheme} />
          <BsSunFill className='swap-on h-6 w-6' />
          <BsMoonFill className='swap-off h-6 w-6' />
        </label>

        {/* Cart */}
        <NavLink to='/cart' className='ghost ghost-btn mr-10   '>
          <div className='indicator'>
            <BsCart3 className='h-6 w-6' />
            <span className='badge badge-sm badge-primary indicator-item'>
              {itemsInCart}{' '}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
