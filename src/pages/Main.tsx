import React from 'react';
import DetailCard from '../components/DetailCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WeatherCart from '../components/WeatherCard';

const Main: React.FC = () => {
  return (
    <div className="relative max-w-container m-auto px-5 h-[100vh] flex flex-col gap-5">
      <Header />

      <div className="flex justify-center gap-5">
        <WeatherCart />
        <WeatherCart />
        <WeatherCart />
        <WeatherCart />
        <WeatherCart />
      </div>

      <DetailCard />

      <Footer />
    </div>
  );
};

export default Main;
