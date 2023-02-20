import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import coordinatesReducer from './coordinates/slice';

export const store = configureStore({
  reducer: {
    coordinates: coordinatesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
