import React from 'react';

import { useNavigation } from 'react-router-dom';

import { Hero } from '../components';
import MindPage from './MindPage';
import TopRestaurantChain from './TopRestaurantChain';
import OnlineFoodRestaurant from './OnlineFoodRestaurant';
import BestPlaces from './BestPlaces';
import BestCuisineNear from './BestCuisineNear';
import ExploreResNearMe from './ExploreResNearMe';
import Store from './Store';
import { SearchPage } from '../components';

import { Loading } from '../components';
import ShimmerUi from '../components/ShimmerUi';

import fetchData from '../utils/api';
import { useOutletContext } from 'react-router-dom';

const filterQuery = {
  queryKey: ['filter'],
  queryFn: () => fetchData(),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(filterQuery);
  // console.log(response);
  const filterData = response.data.cards[4].card.card.sortConfigs;
  const nextFilterData = response.data.cards[4].card.card.facetList;
  const bestPlacesData = response.data.cards[7].card.card;
  const onlineFoodResData =
    response.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
  const bestCuisineNearMe = response.data.cards[8].card.card.brands;
  const exploreEveryResNearMe = response.data.cards[9].card.card.brands;
  const downloadLinks = response.data.cards[10].card.card;
  const citiesData = response.data.cards[11].card.card.cities;
  // console.log(citiesData);
  return {
    filterData,
    nextFilterData,
    bestPlacesData,
    bestCuisineNearMe,
    exploreEveryResNearMe,
    downloadLinks,
    citiesData,
    onlineFoodResData,
  };
};

export default function Landing() {
  const navigation = useNavigation();
  const { showSearchPage } = useOutletContext();

  const isLoading = navigation.state === 'loading';
  return (
    <div className='py-4'>
      {showSearchPage ? (
        <SearchPage />
      ) : (
        <>
          {isLoading ? (
            <ShimmerUi />
          ) : (
            <>
              <Hero />
              <MindPage />
              <TopRestaurantChain />
              <OnlineFoodRestaurant />
              <BestPlaces />
              <BestCuisineNear />
              <ExploreResNearMe />
              <Store />
            </>
          )}
        </>
      )}
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
