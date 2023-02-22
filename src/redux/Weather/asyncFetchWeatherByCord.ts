import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

type FetchWeatherByCoordProps = {
  lat: number;
  lon: number;
};

type WeatherType = {
  weather: {
    current: {};
    daily: {};
    hourly: {};
  };
};

export const fetchWeatherByCoord = createAsyncThunk<WeatherType, FetchWeatherByCoordProps>(
  'weather/fetchWeatherByCoordStatus',
  async ({ lat, lon }) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&lang=ua&appid=${apiKey}`,
    );

    return data;
  },
);
