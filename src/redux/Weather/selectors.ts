import { RootState } from '../store';

export const selectWeather = (state: RootState) => state.weather;
