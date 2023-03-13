import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './redux/store';
import TomorrowWeather from './pages/TomorrowWeather';
import DailyWeather from './pages/DailyWeather';
import MainLayout from './layouts/MainLayout';
import TodayWeather from './pages/TodayWeather';
import axios from 'axios';
import CurrentWeather from './pages/CurrentWeather';

const App: React.FC = () => {
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
