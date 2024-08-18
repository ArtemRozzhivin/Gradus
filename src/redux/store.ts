import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import citiesReducer from './cities/slice';
import locationsReducer from './locations/slice';
import weatherReducer from './weather/slice';

export const store = configureStore({
  reducer: {
    locations: locationsReducer,
    cities: citiesReducer,
    weather: weatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
