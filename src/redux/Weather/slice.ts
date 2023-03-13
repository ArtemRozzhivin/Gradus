import { currentWeatherType, weatherSliceType, dailyWeatherType, hourlyWeatherType } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchWeather } from './asyncFetchWeather';

const initialState: weatherSliceType = {
  current: {} as currentWeatherType,
  daily: [],
  dailyDetail: {} as dailyWeatherType,
  today: [],
  todayDetail: {} as hourlyWeatherType,
  tomorrow: [],
  tomorrowDetail: {} as hourlyWeatherType,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeDailyDetail: (state, action: PayloadAction<dailyWeatherType>) => {
      state.dailyDetail = action.payload;
    },
    changeTodayDetail: (state, action: PayloadAction<hourlyWeatherType>) => {
      state.todayDetail = action.payload;
    },
    changeTomorrowDetail: (state, action: PayloadAction<hourlyWeatherType>) => {
      state.tomorrowDetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state, action) => {});
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.current = action.payload.current;

      state.daily = action.payload.daily;
      state.dailyDetail = action.payload.daily[0];

      state.today = action.payload.hourly.slice(0, 24);
      state.todayDetail = action.payload.hourly[0];
      state.tomorrow = action.payload.hourly.slice(24, 48);
      state.tomorrowDetail = action.payload.hourly[24];
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {});
  },
});

export const { changeDailyDetail, changeTodayDetail, changeTomorrowDetail } = weatherSlice.actions;

export default weatherSlice.reducer;
