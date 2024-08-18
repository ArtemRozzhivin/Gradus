import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CityType } from './types';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchCities = createAsyncThunk(
  'coordinates/fetchCitiesStatus',
  async (city: string) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`,
    );

    return data as CityType[];
  },
);
