/**
 * here we will make our api call and function to fetch the data from the api
 *
 */

export const API_URL =
  'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

//https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&restaurantId=125878&catalog_qa=undefined&submitAction=ENTER

export const fetchSinglePageData = async (id) => {
  const res = await fetch(
    `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
  );
  const data = await res.json();
  return { data };
};

export const getSearchPageData = async () => {
  const res = await fetch(
    'https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=31.251484&lng=75.700007'
  );
  const data = await res.json();
  return { data };
};

export const getSearchData = async (searchString) => {
  const res = await fetch(
    `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=31.251484&lng=75.700007&str=${searchString}&trackingId=undefined`
  );
  const data = await res.json();
  return { data };
};

export const getSpecificSearchResultData = async (searchText) => {
  const res = await fetch(
    `https://www.swiggy.com/dapi/restaurants/search/v3?lat=31.251484&lng=75.700007&str=${searchText}&trackingId=undefined&submitAction=ENTER&queryUniqueId=15a62467-a3a9-a414-32cf-2b88d4c42868&selectedPLTab=DISH`
  );
  const data = await res.json();
  return { data };
};

export const EMPTY_CART_URL =
  'https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png';

// export default async function fetchData() {
//   const response = await fetch(API_URL);
//   const data = await response.json();
//   console.log(data);
// }

export default async function fetchData() {
  const response = await fetch(API_URL);
  const data = await response.json();
  // console.log(data);
  return data;
}

// export const bestRestaurant = async () => {
//   const response = await fetch(API_URL);
//   const data = await response.json();
//   return data;
// };
