import { CoordStateType } from './types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const initialState: CoordStateType = {
  coordinates: {
    lat: 0,
    lon: 0,
  },
};

export const fetchCoordByCity = createAsyncThunk(
  'coordinates/fetchCoordByCityStatus',
  async (city: string) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`,
    );

    return data;
  },
);

export const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoordByCity.pending, (state, action) => {});
    builder.addCase(fetchCoordByCity.fulfilled, (state, action) => {
      const result = action.payload[0];
      state.coordinates.lat = result.lat;
      state.coordinates.lon = result.lon;
    });
    builder.addCase(fetchCoordByCity.rejected, (state, action) => {});
  },
});

export const {} = coordinatesSlice.actions;

export default coordinatesSlice.reducer;
