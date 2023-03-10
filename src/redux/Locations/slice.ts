import { createSlice } from '@reduxjs/toolkit';
import { fetchUserLocation } from './asyncFetchUserLocation';
import { Locations, LocationsSliceType } from './types';

export const initialState: LocationsSliceType = {
  userLocation: {} as Locations,
  currentLocations: {} as Locations,
};

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserLocation.pending, (state, action) => {});
    builder.addCase(fetchUserLocation.fulfilled, (state, action) => {
      state.userLocation = action.payload;
    });
    builder.addCase(fetchUserLocation.rejected, (state, action) => {
      console.log(action.error);
    });
  },
});

export const {} = locationsSlice.actions;

export default locationsSlice.reducer;
