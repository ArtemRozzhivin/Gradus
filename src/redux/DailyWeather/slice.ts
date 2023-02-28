import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDailyWeather } from './asyncFetchDailyWeather';
import { dailyWeatherSliceType, fetchDailyWeatherType } from './types';

const initialState: dailyWeatherSliceType = {
  daily: [],
  detail: {} as fetchDailyWeatherType,
};

const dailyWeatherSlice = createSlice({
  name: 'dailyWeather',
  initialState,
  reducers: {
    changeDetailCard: (state, action: PayloadAction<fetchDailyWeatherType>) => {
      state.detail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDailyWeather.pending, (state, action) => {});
    builder.addCase(fetchDailyWeather.fulfilled, (state, action) => {
      state.daily = action.payload;
      state.detail = action.payload[0];
    });
    builder.addCase(fetchDailyWeather.rejected, (state, action) => {});
  },
});

export const { changeDetailCard } = dailyWeatherSlice.actions;

export default dailyWeatherSlice.reducer;
