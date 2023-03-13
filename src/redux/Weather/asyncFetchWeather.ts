import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchWeatherProps, fetchWeatherType, weatherSliceType } from './types';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = createAsyncThunk<fetchWeatherType, fetchWeatherProps>(
  'weather/fetchWeatherByCoordStatus',
  async ({ lat, lon }) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&lang=ua&exclude=minutely,alerts&appid=${apiKey}`,
    );

    return data;
  },
);
