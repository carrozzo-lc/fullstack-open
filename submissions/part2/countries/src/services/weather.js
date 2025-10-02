import axios from 'axios';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = import.meta.env.VITE_WEATHER;

export const getWeather = (lat, lon) => {
  const request = axios.get(
    `${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );
  return request.then((response) => response.data);
};
