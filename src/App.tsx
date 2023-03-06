import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CurrentWeather from './components/Weather/Current';
import { fetchDailyWeather } from './redux/DailyWeather/asyncFetchDailyWeather';
import { useAppDispatch } from './redux/store';
import TomorrowWeather from './pages/TomorrowWeather';
import DailyWeather from './pages/DailyWeather';
import MainLayout from './layouts/MainLayout';
import TodayWeather from './pages/TodayWeather';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchDailyWeather({ lat: 50.42, lon: 30 }));
  // }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<CurrentWeather />} />
          <Route path="/8-days" element={<DailyWeather />} />
          <Route path="/today" element={<TodayWeather />} />
          <Route path="/tomorrow" element={<TomorrowWeather />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
