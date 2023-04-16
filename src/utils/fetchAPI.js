const API_KEY = '0f7df762fc4a1a6e1fcef1462349afe2';

export const getData = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  const dataJSONed = await data.json();
  return dataJSONed;
};

export const getDataById = async dataId => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${dataId}?api_key=${API_KEY}&language=en-US`
  );
  const dataJSONed = await data.json();
  return dataJSONed;
};

export const getCreditsById = async dataId => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${dataId}/credits?api_key=${API_KEY}&language=en-US`
  );
  const dataJSONed = await data.json();
  return dataJSONed;
};

export const getReviewsById = async dataId => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${dataId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  const dataJSONed = await data.json();
  return dataJSONed;
};

export const getDataByQuery = async dataQuery => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${dataQuery}`
  );
  const dataJSONed = await data.json();
  return dataJSONed;
};
