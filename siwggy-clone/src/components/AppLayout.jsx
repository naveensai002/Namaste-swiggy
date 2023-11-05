import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Loading from './Loading';

import { Outlet } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';

import fetchData from '../utils/api';

const fetchCities = {
  queryKey: ['cities'],
  queryFn: () => fetchData(),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(fetchCities);
  // console.log(response?.data?.cards[11]?.card?.card?.cities);
  const cities = response?.data?.cards[11]?.card?.card?.cities;
  return { cities };
};

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
        <section className='align-element '>
          <Outlet />
        </section>
      )}
      <Footer />
    </>
  );
};

export default AppLayout;
