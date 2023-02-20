import { CoordStateType } from './types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const initialState: CoordStateType = {
  cities: [],
};

export const fetchCities = createAsyncThunk(
  'coordinates/fetchCoordByCityStatus',
  async (city: string) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`,
    );

    return data;
  },
);

export const citiesSlice = createSlice({
  name: 'coordinates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCities.pending, (state, action) => {});
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.cities = action.payload;
    });
    builder.addCase(fetchCities.rejected, (state, action) => {});
  },
});

export const {} = citiesSlice.actions;

export default citiesSlice.reducer;
