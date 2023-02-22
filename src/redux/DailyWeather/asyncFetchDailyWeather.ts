import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

type fetchDailyWeatherType = {
  daily: {};
};

type fetchDailyWeatherProps = {
  lat: number;
  lon: number;
};

export const fetchDailyWeather = createAsyncThunk<fetchDailyWeatherType, fetchDailyWeatherProps>(
  'weatherWeather/fetchDailyWeatherStatus',
  async ({ lat, lon }) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&lang=ua&exclude=current,minutely,hourly,alerts&appid=${apiKey}`,
    );

    return data;
  },
);
