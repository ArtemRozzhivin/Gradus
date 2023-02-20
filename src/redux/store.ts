import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import citiesReducer from './cities/slice';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
