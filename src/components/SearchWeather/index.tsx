import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCoordByCity } from '../../redux/coordinates/selectors';
import { fetchCoordByCity } from '../../redux/coordinates/slice';
import { useAppDispatch } from '../../redux/store';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Modal from '../../ui/Modal';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const SearchWeather = () => {
  const dispatch = useAppDispatch();
  const { coordinates } = useSelector(selectCoordByCity);
  const [searchWeather, setSearchWeather] = useState('');

  const fetchWeather = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=50.4500336&lon=30.5241361&limit=5&appid=${apiKey}`,
    );
    console.log(response);
  };

  const getCityCoord = () => {
    dispatch(fetchCoordByCity(searchWeather));
  };

  const getWeather = (value: string) => {
    setSearchWeather(value);
  };

  console.log(searchWeather);

  return (
    <div className="flex gap-3">
      <Input value={searchWeather} onChange={getWeather} />
      <Button onClick={() => getCityCoord()}>Search</Button>

      <Modal />
    </div>
  );
};

export default SearchWeather;
