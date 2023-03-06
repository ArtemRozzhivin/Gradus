import { fetchHourlyWeather } from './asyncFetchHourlyWeather';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { hourlyWeather, HourlyWeatherSliceType } from './types';

const initialState: HourlyWeatherSliceType = {
  today: [],
  todayDetail: {} as hourlyWeather,
  tomorrow: [],
  tomorrowDetail: {} as hourlyWeather,
};

const hourlyWeatherSlice = createSlice({
  name: 'hourlyWeather',
  initialState,
  reducers: {
    changeTodayDetail: (state, action: PayloadAction<hourlyWeather>) => {
      state.todayDetail = action.payload;
    },
    changeTomorrowDetail: (state, action: PayloadAction<hourlyWeather>) => {
      state.tomorrowDetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHourlyWeather.pending, (state, action) => {});
    builder.addCase(fetchHourlyWeather.fulfilled, (state, action) => {
      state.today = action.payload.slice(0, 24);
      state.todayDetail = action.payload[0];
      state.tomorrow = action.payload.slice(24, 48);
      state.tomorrowDetail = action.payload[24];
    });
    builder.addCase(fetchHourlyWeather.rejected, (state, action) => {});
  },
});

export const { changeTodayDetail, changeTomorrowDetail } = hourlyWeatherSlice.actions;

export default hourlyWeatherSlice.reducer;
