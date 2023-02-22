import { createSlice } from '@reduxjs/toolkit';
import { fetchDailyWeather } from './asyncFetchDailyWeather';
import { dailyWeatherSliceType } from './types';

const initialState: dailyWeatherSliceType = {
  daily: {},
};

const dailyWeatherSlice = createSlice({
  name: 'dailyWeather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDailyWeather.pending, (state, action) => {});
    builder.addCase(fetchDailyWeather.fulfilled, (state, action) => {
      state.daily = action.payload;
    });
    builder.addCase(fetchDailyWeather.rejected, (state, action) => {});
  },
});

export const {} = dailyWeatherSlice.actions;

export default dailyWeatherSlice.reducer;
