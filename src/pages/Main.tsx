import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DetailCard from '../components/DetailCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';
import { fetchDailyWeather } from '../redux/DailyWeather/asyncFetchDailyWeather';
import { selectDailyWeather } from '../redux/DailyWeather/selectors';
import { useAppDispatch } from '../redux/store';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const { daily } = useSelector(selectDailyWeather);
  console.log(daily);

  useEffect(() => {
    dispatch(fetchDailyWeather({ lat: 50.42, lon: 30 }));
  }, []);

  return (
    <div className="relative max-w-container m-auto px-5 h-[100vh] flex flex-col gap-5">
      <Header />

      <div className="flex-auto flex flex-col gap-5">
        <div className="flex justify-center gap-2 flex-wrap">
          {daily.map((obj) => (
            <WeatherCard key={obj.dt} {...obj} />
          ))}
        </div>

        <DetailCard current={daily[0]} />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
