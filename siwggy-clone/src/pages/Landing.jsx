import React from 'react';
import { Hero, MainContainer } from '../components';

export default function Landing() {
  return (
    <div>
      <Hero />
      <MainContainer />
    </div>
  );
}

/**
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
