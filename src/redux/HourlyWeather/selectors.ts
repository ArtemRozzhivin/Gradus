import { RootState } from './../store';

export const selectHourlyWeather = (state: RootState) => state.hourlyWeather;
