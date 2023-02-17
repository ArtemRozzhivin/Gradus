import axios from 'axios';
import React, { useEffect } from 'react';
import DetailCard from '../components/DetailCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WeatherCart from '../components/WeatherCard';

const Main: React.FC = () => {
  useEffect(() => {
    try {
      const fetchA = async () => {
        const a = await axios.get(
          'https://api.openweathermap.org/geo/1.0/reverse?lat=50.4500336&lon=30.5241361&limit=5&appid=81a6295981e9881c977f7fac8a27ff90',
        );
        console.log(a);
      };

      fetchA();

      // const a = axios.get(
      //   'https://api.openweathermap.org/geo/1.0/reverse?lat=50.4500336&lon=30.5241361&limit=5&appid=81a6295981e9881c977f7fac8a27ff90',
      // );
      // a.then(
      //   (result) => {
      //     console.log(result);
      //   },
      //   (error) => {
      //     console.log(error);
      //   },
      // );
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="relative max-w-container m-auto px-5 h-[100vh] flex flex-col gap-5">
      <Header />

      <div className="flex-auto flex flex-col gap-5">
        <div className="flex justify-center gap-5">
          <WeatherCart />
          <WeatherCart />
          <WeatherCart />
          <WeatherCart />
          <WeatherCart />
        </div>

        <DetailCard />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
