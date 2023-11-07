import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const links = [
  { id: 1, text: 'Home', url: '/' },
  { id: 2, text: 'About', url: 'about' },
  { id: 3, text: 'InstaMart', url: 'instaMart' },
  // { id: 4, text: 'Cart', url: 'cart' },
  { id: 4, text: 'Checkout', url: 'checkout' },
  { id: 5, text: 'Orders', url: 'orders' },
];

const NavLinks = ({ setShowBtn }) => {
  const user = useSelector((state) => state?.user?.user);

  const toggleShowBtn = useCallback((prev) => {
    setShowBtn(!prev);
  }, []);
  return (
    <>
      {links.map((link) => {
        const { id, text, url } = link;
        // condition for protected routes
        if ((url === 'checkout' || url === 'orders') && !user) {
          return null;
        }
        return (
          <li key={id}>
            <Link to={url} onClick={toggleShowBtn} className='capitalize py-2'>
              {' '}
              {text}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
