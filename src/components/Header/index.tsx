import Modal from '../../ui/Modal';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCities } from '../../redux/Cities/selectors';
import {
  addCityToRecent,
  changeCurrentCity,
  removeAllRecentCities,
} from '../../redux/Cities/slice';
import { CityType } from '../../redux/Cities/types';
import { fetchCurrentWeather } from '../../redux/CurrentWeather/asyncFetchCurrentWeather';
import { fetchDailyWeather } from '../../redux/DailyWeather/asyncFetchDailyWeather';
import { fetchHourlyWeather } from '../../redux/HourlyWeather/asyncFetchHourlyWeather';
import { useAppDispatch } from '../../redux/store';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import CityCard from '../CityCard';
import SearchWeather from '../SearchWeather';
import WeatherNavigation from '../WeatherNavigation';
import RecentLocations from '../RecentLocations';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 p-5 bg-app rounded-b-xl w-full">
      <div className="flex items-center gap-7">
        <h1 className="text-2xl">Gradus</h1>
        <div className="flex-auto">
          <SearchWeather />
        </div>
        <RecentLocations />
      </div>

      <WeatherNavigation />
    </div>
  );
};

export default Header;
