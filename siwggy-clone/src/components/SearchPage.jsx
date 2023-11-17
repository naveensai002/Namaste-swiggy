import React, { useEffect, useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import { getSearchPageData, getSearchData } from '../utils/api';
import { useNavigation } from 'react-router-dom';
import SearchSuggestions from './SearchSuggestions';
import Loading from './Loading';

export default function SearchPage({ showSearchPage, setShowSearchPage }) {
  const [resultData, setResultData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [queryData, setQueryData] = useState([]);
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  const fetchResults = async () => {
    const res = await getSearchPageData();
    const data = res?.data?.data;
    setResultData(data?.cards);
    // console.log(resultData);
  };
  const searchData = async (searchQuery) => {
    const res = await getSearchData(searchQuery);
    // console.log(res);
    setQueryData(res?.data?.data);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchResults();
      searchData(searchTerm);
    }, [1000]);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const imgCaro =
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/';

  return (
    <div>
      <div className='grid place-items-center p-4 '>
        <input
          type='search'
          value={searchTerm}
          onChange={(ev) => setSearchTerm(ev.target.value)}
          className=' w-3/4 p-3 relative rounded-md border border-yellow-400 outline-none'
          placeholder='Search for restaurants and food'
        />
        <CgSearch className=' pt-1 absolute right-56 text-black' size={28} />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='pt-10'>
          {resultData.slice(1).map((data) => {
            const { header, id, imageGridCards } = data?.card?.card;
            const { info } = imageGridCards;
            return (
              <div key={id} className='mb-8 pl-32'>
                <h1 className='text-2xl text-white'>{header?.title}</h1>
                <div className='pt-3'>
                  <figure className='flex p-2 gap-x-4 rounded-r-md'>
                    {info.map((item) => {
                      const { imageId, id } = item;
                      return (
                        <img
                          key={id}
                          src={imgCaro + imageId}
                          className='h-16 w-16 rounded-md'
                          alt='carousel-img'
                        />
                      );
                    })}
                  </figure>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* search suggestions */}
      {isLoading ? (
        <Loading />
      ) : (
        <SearchSuggestions
          queryData={queryData}
          showSearchPage={showSearchPage}
          setShowSearchPage={setShowSearchPage}
        />
      )}

      {/* end of searchSuggestions */}
    </div>
  );
}
