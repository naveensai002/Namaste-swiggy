import React, { useCallback, useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Loading from './Loading';
import SearchPage from './SearchPage';

import { Outlet, useNavigation } from 'react-router-dom';

import fetchData from '../utils/api';

const fetchCities = {
  queryKey: ['cities'],
  queryFn: () => fetchData(),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(fetchCities);
  const cities = response?.data?.cards[11]?.card?.card?.cities;
  return { cities };
};

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  const [showSearchPage, setShowSearchPage] = useState(false);

  const toggleSearchPage = useCallback(() => {
    setShowSearchPage(!showSearchPage);
  }, [showSearchPage]);

  return (
    <>
      <Header />
      <Navbar
        showSearchPage={showSearchPage}
        toggleSearchPage={toggleSearchPage}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <section>
          {showSearchPage ? (
            <SearchPage />
          ) : (
            <Outlet context={{ showSearchPage }} />
          )}
          {/* <Outlet context={{ showSearchPage }} /> */}
        </section>
      )}
      <Footer />
    </>
  );
};

export default AppLayout;
