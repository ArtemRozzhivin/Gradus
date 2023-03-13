import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getLatLon } from '../../utils/getLatLon';
import { fetchWeather } from '../Weather/asyncFetchWeather';

const ipInfoKey = process.env.REACT_APP_IP_INFO_API_KEY;

export const fetchUserLocation = createAsyncThunk(
  'locations/fetchUserLocationStatus',
  async (_, thunkAPI) => {
    const response = await axios.get(`https://api.ipify.org/?format=json`);

    const result = await axios.get(`https://ipinfo.io/${response.data.ip}?token=${ipInfoKey}`);
    const coord = getLatLon(result.data.loc.split(','));

    thunkAPI.dispatch(fetchWeather(coord));

    return coord;
  },
);
