import { useEffect, useState } from 'react';
import { getWeather } from '../services/weather';

const CountryDetail = ({
  name,
  capital,
  area,
  languages,
  images,
  capitalInfo,
}) => {
  const [weather, setWeather] = useState(null);
  const lat = capitalInfo?.latlng?.[0];
  const lon = capitalInfo?.latlng?.[1];

  useEffect(() => {
    getWeather(lat, lon).then((response) => {
      const { main, weather: weatherArr, wind } = response;
      const weatherObj = {
        temp: main.temp,
        icon: `https://openweathermap.org/img/wn/${weatherArr[0].icon}@2x.png`,
        wind: wind.speed,
      };
      setWeather(weatherObj);
    });
  }, [lat, lon]);

  return (
    <div>
      <h1>{name}</h1>
      <div>Capital: {capital}</div>
      <div>Area: {area}</div>
      <h3>Languages</h3>
      <ul>
        {Object.keys(languages).map((item) => (
          <li key={item}>{languages[item]}</li>
        ))}
      </ul>
      <img alt={images.alt} src={images.png} />
      {weather && (
        <div>
          <h3>Weather in {capital}</h3>
          <div>Temperature: {weather.temp} Celsius</div>
          <div>
            <img alt="weather icon" src={weather.icon} />
          </div>
          <div>Wind: {weather.wind} m/s</div>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
