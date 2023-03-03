import { fetchHourlyWeather } from './asyncFetchHourlyWeather';
import { createSlice } from '@reduxjs/toolkit';
import { HourlyWeatherSliceType } from './types';

const initialState: HourlyWeatherSliceType = {
  today: [],
  tomorrow: [],
};

const hourlyWeatherSlice = createSlice({
  name: 'hourlyWeather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHourlyWeather.pending, (state, action) => {});
    builder.addCase(fetchHourlyWeather.fulfilled, (state, action) => {
      state.today = action.payload.slice(0, 24);
      state.tomorrow = action.payload.slice(24, 48);
    });
    builder.addCase(fetchHourlyWeather.rejected, (state, action) => {});
  },
});

export const {} = hourlyWeatherSlice.actions;

export default hourlyWeatherSlice.reducer;
