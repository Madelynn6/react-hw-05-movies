const URL =
  'https://api.themoviedb.org/3/trending/all/day?api_key=0f7df762fc4a1a6e1fcef1462349afe2';

export const getData = async () => {
  const moviesData = await fetch(URL);
  const moviesDataJSONed = await moviesData.json();
  return moviesDataJSONed;
};
