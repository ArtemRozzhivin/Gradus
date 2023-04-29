import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCities } from '../../redux/Cities/selectors';
import SearchWeather from '../SearchWeather';
import WeatherNavigation from '../WeatherNavigation';
import RecentLocations from '../RecentLocations';

const Header: React.FC = () => {
  const { recentCities, cities } = useSelector(selectCities);

  return (
    <div className="flex flex-col gap-5 p-5 bg-app rounded-b-xl w-full">
      <div className="flex items-center gap-7">
        <h1 className="text-2xl text-second">Gradus</h1>
        <div className="flex-auto">
          <SearchWeather cities={cities} />
        </div>
        <RecentLocations recentCities={recentCities} />
      </div>

      <WeatherNavigation />
    </div>
  );
};

export default Header;
