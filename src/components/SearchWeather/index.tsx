import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '../../ui/Button';
import Input from '../../ui/Input';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const SearchWeather = () => {
  const [searchWeather, setSearchWeather] = useState('');

  const fetchWeather = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=50.4500336&lon=30.5241361&limit=5&appid=${apiKey}`,
    );
    console.log(response);
  };

  const fetchCityCoord = async () => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchWeather}&appid=${apiKey}`,
    );
    console.log(data);
  };

  const getWeather = (value: string) => {
    setSearchWeather(value);
  };

  console.log(searchWeather);

  return (
    <div className="flex gap-3">
      <Input value={searchWeather} onChange={getWeather} />
      <Button onClick={() => fetchCityCoord()}>Search</Button>
    </div>
  );
};

export default SearchWeather;
