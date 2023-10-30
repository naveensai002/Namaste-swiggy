import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Loading from './Loading';

import { Outlet } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';

const AppLayout = () => {
  const navigation = useNavigation();

  const loading = navigation.state === 'loading';

  return (
    <>
      <Header />
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <section className='align-element py-12'>
          <Outlet />
        </section>
      )}
      <Footer />
    </>
  );
};

export default AppLayout;
