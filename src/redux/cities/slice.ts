import { citiesSliceType } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchCities } from './asyncFetchCities';

export const initialState: citiesSliceType = {
  cities: [],
};

export const citiesSlice = createSlice({
  name: 'cities',
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
