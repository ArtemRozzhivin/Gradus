import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './redux/store';
import TomorrowWeather from './pages/TomorrowWeather';
import DailyWeather from './pages/DailyWeather';
import MainLayout from './layouts/MainLayout';
import TodayWeather from './pages/TodayWeather';
import axios from 'axios';
import CurrentWeather from './pages/CurrentWeather';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1c3c65',
    },
  },
});

const App: React.FC = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<CurrentWeather />} />
            <Route path="/today" element={<TodayWeather />} />
            <Route path="/tomorrow" element={<TomorrowWeather />} />
            <Route path="/8-days" element={<DailyWeather />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
