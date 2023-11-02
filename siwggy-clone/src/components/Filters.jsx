import React, { useCallback, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { LuSettings2 } from 'react-icons/lu';

export default function Filters() {
  const [selectedFilter, setSelectedFilter] = useState('');

  const { filterData, nextFilterData } = useLoaderData();

  const handleChange = (ev) => {
    setSelectedFilter(ev.target.value);
  };
  const handleFilterChange = (e) => {
    console.log(e.target.textContent);
  };
  return (
    <div className='flex flex-row gap-x-4 pt-6 items-center '>
      <button className='btn btn-ghost btn-md rounded-full p-2 shadow-md '>
        Filter
        <span>
          <LuSettings2 size={18} />
        </span>
      </button>

      <select
        name={selectedFilter}
        id={selectedFilter}
        onChange={handleChange}
        defaultChecked='Sort By'
        className='dropdown rounded-full shadow-md btn btn-md p-2 '
      >
        {filterData.map((item) => {
          const { key, selected, title } = item;
          return (
            <option
              value={title}
              key={key}
              className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 '
            >
              {title}
            </option>
          );
        })}
      </select>

      <div className='gap-4 flex btn-md '>
        {nextFilterData.map((nfData) => {
          // console.log(nfData.facetInfo[0]);
          const { label, id } = nfData.facetInfo[0];
          return (
            <button
              onClick={handleFilterChange}
              className='btn shadow-md rounded-full p-2'
              key={id}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
