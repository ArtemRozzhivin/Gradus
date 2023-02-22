import { weatherSliceType } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchWeatherByCoord } from './asyncFetchWeatherByCord';

const initialState: weatherSliceType = {
  weather: {
    current: {},
    daily: {},
    hourly: {},
  },
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addToCurrentWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherByCoord.pending, (state, action) => {});
    builder.addCase(fetchWeatherByCoord.fulfilled, (state, action) => {
      state.weather.current = action.payload.weather.current;
      state.weather.daily = action.payload.weather.daily;
      state.weather.hourly = action.payload.weather.hourly;
    });
    builder.addCase(fetchWeatherByCoord.rejected, (state, action) => {});
  },
});

export const { addToCurrentWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
