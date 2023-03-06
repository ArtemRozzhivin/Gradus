import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCities } from './asyncFetchCities';
import { CitiesSliceType, CityType } from './types';

export const initialState: CitiesSliceType = {
  cities: [],
  recentCities: [],
  currentCity: {} as CityType,
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCityToRecent: (state, action: PayloadAction<CityType>) => {
      state.recentCities = [...state.recentCities, action.payload];
    },
    removeAllRecentCities: (state) => {
      state.recentCities = [];
    },
    changeCurrentCity: (state, action: PayloadAction<CityType>) => {
      state.currentCity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCities.pending, (state, action) => {});
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.cities = action.payload;
    });
    builder.addCase(fetchCities.rejected, (state, action) => {});
  },
});

export const { changeCurrentCity, addCityToRecent, removeAllRecentCities } = citiesSlice.actions;

export default citiesSlice.reducer;
