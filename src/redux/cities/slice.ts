import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCities } from './asyncFetchCities';
import { CitiesSliceType, CityType } from './types';

export const initialState: CitiesSliceType = {
  cities: [],
  recentCities: [],
  currentCity: {} as CityType,
  userCity: {} as CityType,
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCityToRecent: (state, action: PayloadAction<CityType>) => {
      const findCity = state.recentCities.find(
        (city) => city.lat === action.payload.lat && city.lon === action.payload.lon,
      );

      if (!findCity) {
        state.recentCities = [...state.recentCities, action.payload];
      }
    },
    removeAllRecentCities: (state) => {
      state.recentCities = [];
    },
    removeRecentCity: (state, action: PayloadAction<CityType>) => {
      state.recentCities = state.recentCities.filter(
        (city) => city.lat !== action.payload.lat || city.lon !== action.payload.lon,
      );
    },
    changeCurrentCity: (state, action: PayloadAction<CityType>) => {
      state.currentCity = action.payload;
    },
    addUserCity: (state, action: PayloadAction<CityType>) => {
      state.userCity = action.payload;
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

export const {
  changeCurrentCity,
  addCityToRecent,
  removeAllRecentCities,
  removeRecentCity,
  addUserCity,
} = citiesSlice.actions;

export default citiesSlice.reducer;
