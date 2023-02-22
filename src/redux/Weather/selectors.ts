import { RootState } from './../store';

export const selectWeather = (state: RootState) => state.weather;

export const selectCurrentWeather = (state: RootState) => state.weather.weather;
