import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { CityType } from "../Cities/types"
import { getLatLon } from '../../utils/getLatLon'
import { addUserCity } from '../Cities/slice'
import { fetchWeather } from '../Weather/asyncFetchWeather'

const ipInfoKey = process.env.REACT_APP_IP_INFO_API_KEY
const apiWeatherKey = process.env.REACT_APP_WEATHER_API_KEY

export const fetchUserLocation = createAsyncThunk(
  'locations/fetchUserLocationStatus',
  async (_, thunkAPI) => {
    const response = await axios.get(`https://api.ipify.org/?format=json`)

    const result = await axios.get(`https://ipinfo.io/${response.data.ip}?token=${ipInfoKey}`)
    const coord = getLatLon(result.data.loc.split(','))

    const userCity = await axios.get(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${coord.lat}&lon=${coord.lon}&appid=${apiWeatherKey}`,
    )

    thunkAPI.dispatch(addUserCity(userCity.data[0]))
    thunkAPI.dispatch(fetchWeather(coord))

    return coord
  },
)
