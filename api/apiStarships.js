const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

export const getStarships = async (search) => {
  let url = 'https://swapi.dev/api/starships/';

  if (search) {
    url += '?search=' + encodeURIComponent(search);
  }

  return await getData(url);
};

export const changePage = async (value) => {
  return await getData(value);
};

export const getDetailsStarship = async (starshipId) => {
  return await getData('https://swapi.dev/api/starships/' + starshipId);
};


export const getFilmsForDetailsStarship = async (films) => {
  return await Promise.all(films.map(async (item) => await getData(item)));
};
