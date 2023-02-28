import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DetailCard from '../components/DetailCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';
import { fetchDailyWeather } from '../redux/DailyWeather/asyncFetchDailyWeather';
import { selectDailyWeather } from '../redux/DailyWeather/selectors';
import { changeDetailCard } from '../redux/DailyWeather/slice';
import { fetchDailyWeatherProps, fetchDailyWeatherType } from '../redux/DailyWeather/types';
import { useAppDispatch } from '../redux/store';
import Button from '../ui/Button';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const { daily, detail } = useSelector(selectDailyWeather);
  console.log(daily);

  useEffect(() => {
    dispatch(fetchDailyWeather({ lat: 50.42, lon: 30 }));
  }, []);

  const onChangeDetail = (obj: fetchDailyWeatherType) => {
    dispatch(changeDetailCard(obj));
  };

  return (
    <div className="relative max-w-container m-auto px-5 min-h-[100vh] flex flex-col gap-5">
      <Header />

      <div className="flex-auto flex flex-col gap-5">
        <div className="flex justify-center gap-2 flex-wrap">
          {daily.length ? (
            daily.map((obj) => (
              <Button key={obj.dt} onClick={() => onChangeDetail(obj)}>
                <WeatherCard {...obj} />
              </Button>
            ))
          ) : (
            <div>Loading</div>
          )}
        </div>

        {daily.length ? <DetailCard current={detail} /> : <div>Loading</div>}
      </div>

      <Footer />
    </div>
  );
};

export default Main;
