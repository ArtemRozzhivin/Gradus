import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchHourlyWeatherProps, hourlyWeather } from './types';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchHourlyWeather = createAsyncThunk<hourlyWeather[], fetchHourlyWeatherProps>(
  'weather/fetchHourlyWeatherStatus',
  async ({ lat, lon }) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&lang=ua&exclude=daily,minutely,current,alerts&appid=${apiKey}`,
    );

    return data.hourly;
  },
);
