import React from 'react';
import { Hero, MainContainer } from '../components';
import MindPage from './MindPage';
import TopRestaurantChain from './TopRestaurantChain';
import OnlineFoodRestaurant from './OnlineFoodRestaurant';
import fetchData from '../utils/api';

const filterQuery = {
  queryKey: ['filter'],
  queryFn: () => fetchData(),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(filterQuery);
  console.log(response);
  const filterData = response.data.cards[4].card.card.sortConfigs;
  const nextFilterData = response.data.cards[4].card.card.facetList;
  return { filterData, nextFilterData };
};

export default function Landing() {
  return (
    <div>
      <Hero />
      <MindPage />
      <TopRestaurantChain />
      <OnlineFoodRestaurant />
      <MainContainer />
    </div>
  );
}

/**
 * loader yha define krenge cards tk usme data fetch hoga
 * then we can access data using useLoaderData
 * so no need to make api call and fetch data in every component
 * will refactor in last
 * 
 * 
 *left side no of results  top level
  middle search bar (searchBar component)
    tanstack query search
    or
    search with debouncing/ deboounce function 
  end =>filters (filter component)

  main container => infinite scroll => manual code or react-infinite-scroll hook
    card =>
      img
      title
      subtitle/description
      left side rating
      middle timing
      right price
 */
