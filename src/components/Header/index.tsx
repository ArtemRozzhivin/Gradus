import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCities } from '../../redux/Cities/selectors';
import SearchWeather from '../SearchWeather';
import WeatherNavigation from '../WeatherNavigation';
import RecentLocations from '../RecentLocations';
import Button from '../../ui/Button';
import { useTranslation } from 'react-i18next';
import { Divider, FormControl, FormHelperText, MenuItem, Select } from '@mui/material';
import SelectLang from '../SelectLang';

const Header: React.FC = () => {
  const { recentCities, cities } = useSelector(selectCities);

  return (
    <div className="flex flex-col gap-5 p-5 bg-lightApp shadow-xl rounded-b-xl w-full border-2 border-black">
      <div className="flex items-center gap-7">
        <h1 className="text-2xl text-blue">Gradus</h1>
        <div className="flex-auto">
          <SearchWeather cities={cities} />
        </div>

        <RecentLocations recentCities={recentCities} />

        <SelectLang />
      </div>

      <Divider />

      <WeatherNavigation />
    </div>
  );
};

export default Header;
