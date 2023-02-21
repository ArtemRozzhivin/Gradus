import { createSlice } from '@reduxjs/toolkit';
import { fetchWeatherByCoord } from './asyncFetchWeatherByCord';
import { initialState } from './types';

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
      state.weather = action.payload;
    });
    builder.addCase(fetchWeatherByCoord.rejected, (state, action) => {});
  },
});

export const { addToCurrentWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
