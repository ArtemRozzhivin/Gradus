import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getLatLon } from '../../utils/getLatLon';
import { fetchCurrentWeather } from '../CurrentWeather/asyncFetchCurrentWeather';
import { fetchDailyWeather } from '../DailyWeather/asyncFetchDailyWeather';
import { fetchHourlyWeather } from '../HourlyWeather/asyncFetchHourlyWeather';

const ipInfoKey = process.env.REACT_APP_IP_INFO_API_KEY;

export const fetchUserLocation = createAsyncThunk(
  'locations/fetchUserLocationStatus',
  async ({}, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;

    const response = await axios.get(`https://api.ipify.org/?format=json`);

    const { data } = await axios.get(`https://ipinfo.io/${response.data.ip}?token=${ipInfoKey}`);

    const coord = getLatLon(data.loc.split(','));
    console.log(coord);

    thunkAPI.dispatch(fetchCurrentWeather(coord));
    thunkAPI.dispatch(fetchHourlyWeather(coord));
    thunkAPI.dispatch(fetchDailyWeather(coord));

    return coord;
  },
);
