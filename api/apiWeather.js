const api = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'a8cf738a0dcf82270431b8b8a64c5a3a';

export const getWeatherApi = async (city) => {
  const response = await fetch(`${api}?q=${city}&appid=${apiKey}`);
  return await response.json();
};
