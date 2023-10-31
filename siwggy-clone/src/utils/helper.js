export default function filterData(searchTerm, restaurants) {
  return restaurants.filter((res) =>
    res?.data?.name?.toLowercase().includes(searchTerm?.toLowercase())
  );
}

/** function for the search functionalitu */
