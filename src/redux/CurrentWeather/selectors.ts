import { RootState } from '../store';

export const selectCurrentWeather = (state: RootState) => state.currentWeather;
