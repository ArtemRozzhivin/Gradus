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

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { daily, detail } = useSelector(selectDailyWeather);
  const { currentCity } = useSelector(selectCities);
  console.log(daily);

  useEffect(() => {
    dispatch(fetchDailyWeather({ lat: 50.42, lon: 30 }));
  }, []);

  return (
    <div className="relative max-w-container m-auto px-5 min-h-[100vh] flex flex-col gap-5">
      <Header />
      <Routes>
        <Route path="/" element={<CurrentWeather />} />
        <Route path="/8-days" element={<DailyWeather />} />
        <Route path="/tomorrow" element={<TomorrowWeather />} />
      </Routes>

      <div className="flex-auto flex flex-col gap-5">
        {Object.keys(currentCity).length ? (
          <div className="text-3xl">
            {currentCity.name}, {currentCity.country}, {currentCity.state}
          </div>
        ) : (
          ''
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;
