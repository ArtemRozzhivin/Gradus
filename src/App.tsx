import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CurrentWeather from './components/Weather/Current';
import DetailCard from './components/DetailCard';
import Footer from './components/Footer';
import Header from './components/Header/index';
import WeatherCard from './components/WeatherCard';
import { selectCities } from './redux/Cities/selectors';
import { fetchDailyWeather } from './redux/DailyWeather/asyncFetchDailyWeather';
import { selectDailyWeather } from './redux/DailyWeather/selectors';
import { changeDetailCard } from './redux/DailyWeather/slice';
import { fetchDailyWeatherType } from './redux/DailyWeather/types';
import { useAppDispatch } from './redux/store';
import Button from './ui/Button';
import TomorrowWeather from './pages/TomorrowWeather';
import DailyWeather from './pages/DailyWeather';
import MainLayout from './layouts/MainLayout';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDailyWeather({ lat: 50.42, lon: 30 }));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<CurrentWeather />} />
          <Route path="/8-days" element={<DailyWeather />} />
          <Route path="/today" element={<TomorrowWeather />} />
          <Route path="/tomorrow" element={<TomorrowWeather />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
