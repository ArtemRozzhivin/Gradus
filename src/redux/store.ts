import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import citiesReducer from './Cities/slice'
import locationsReducer from './Locations/slice'
import weatherReducer from './Weather/slice'

export const store = configureStore({
  reducer: {
    locations: locationsReducer,
    cities: citiesReducer,
    weather: weatherReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
