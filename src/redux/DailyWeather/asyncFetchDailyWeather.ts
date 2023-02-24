import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchDailyWeatherProps, fetchDailyWeatherType } from './types';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchDailyWeather = createAsyncThunk(
  'weatherWeather/fetchDailyWeatherStatus',
  async ({ lat, lon }: fetchDailyWeatherProps) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&lang=ua&exclude=current,minutely,hourly,alerts&appid=${apiKey}`,
    );

    return data.daily as fetchDailyWeatherType[];
  },
);
