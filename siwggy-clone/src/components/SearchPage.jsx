import React, { useEffect, useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import { getSearchPageData } from '../utils/api';
import { useNavigation } from 'react-router-dom';

export default function SearchPage() {
  const [resultData, setResultData] = useState([]);
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  const fetchResults = async () => {
    const res = await getSearchPageData();
    const data = res.data.data;
    setResultData(data.cards);
    // console.log(resultData);
  };

  useEffect(() => {
    fetchResults();
  }, []);
  const imgCaro =
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/';

  return (
    <div>
      <div className='grid place-items-center p-4 '>
        <input
          type='search'
          className=' w-3/4 p-3 relative rounded-md border border-yellow-400 outline-none'
          placeholder='Search for restaurants and food'
        />
        <CgSearch className=' pt-1 absolute right-52 text-black' size={28} />
      </div>
      <div className='pt-10'>
        {resultData.slice(1).map((data) => {
          // console.log(data.card.card);
          const { header, id, imageGridCards } = data?.card?.card;
          const { info } = imageGridCards;
          return (
            <div key={id} className='mb-8 pl-32'>
              <h1 className='text-2xl text-white'>{header.title}</h1>
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
    </div>
  );
}
