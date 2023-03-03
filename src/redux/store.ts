import { hourlyWeather } from './HourlyWeather/types';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import citiesReducer from './Cities/slice';
import currentWeatherReducer from './CurrentWeather/slice';
import hourlyWeatherReducer from './HourlyWeather/slice';
import dailyWeatherReducer from './DailyWeather/slice';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    currentWeather: currentWeatherReducer,
    hourlyWeather: hourlyWeatherReducer,
    dailyWeather: dailyWeatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
