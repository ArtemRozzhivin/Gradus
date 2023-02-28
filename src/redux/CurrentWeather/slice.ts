import { currentWeather, weatherSliceType } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentWeather } from './asyncFetchCurrentWeather';

const initialState: weatherSliceType = {
  current: {} as currentWeather,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentWeather.pending, (state, action) => {});
    builder.addCase(fetchCurrentWeather.fulfilled, (state, action) => {
      state.current = action.payload;
    });
    builder.addCase(fetchCurrentWeather.rejected, (state, action) => {});
  },
});

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
