import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeatherByCoord = createAsyncThunk(
  'weather/fetchWeatherByCoordStatus',
  async (lat, lon) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`,
    );

    return data;
  },
);
