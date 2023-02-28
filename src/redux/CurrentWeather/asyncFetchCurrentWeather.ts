import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { currentWeather, fetchCurrentWeatherProps } from './types';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchCurrentWeather = createAsyncThunk<currentWeather, fetchCurrentWeatherProps>(
  'weather/fetchWeatherByCoordStatus',
  async ({ lat, lon }) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&lang=ua&exclude=daily,minutely,hourly,alerts&appid=${apiKey}`,
    );

    return data.current;
  },
);
