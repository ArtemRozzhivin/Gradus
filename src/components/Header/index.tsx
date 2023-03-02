import React, { useState } from 'react';
import Input from '../../ui/Input';
import SearchWeather from '../SearchWeather';
import WeatherNavigation from '../WeatherNavigation';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 p-5 bg-app rounded-b-xl w-full">
      <div className="flex items-center gap-7">
        <h1 className="text-2xl">Gradus</h1>
        <div className="flex-auto">
          <SearchWeather />
        </div>
        <button>Recent locations</button>
      </div>

      <WeatherNavigation />
    </div>
  );
};

export default Header;
