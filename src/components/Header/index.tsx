import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCities } from '../../redux/Cities/selectors';
import SearchWeather from '../SearchWeather';
import WeatherNavigation from '../WeatherNavigation';
import RecentLocations from '../RecentLocations';
import Button from '../../ui/Button';
import { useTranslation } from 'react-i18next';
import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material';

const Header: React.FC = () => {
  const { recentCities, cities } = useSelector(selectCities);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    console.log(lang);
  };

  return (
    <div className="flex flex-col gap-5 p-5 bg-light rounded-b-xl w-full">
      <div className="flex items-center gap-7">
        <h1 className="text-2xl text-blue">Gradus</h1>
        <div className="flex-auto">
          <SearchWeather cities={cities} />
        </div>

        <RecentLocations recentCities={recentCities} />

        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}>
              <MenuItem value="uk">
                <div className="flex gap-2">
                  <img src="https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.2/Assets/SVG/UA.svg" />{' '}
                  <div>UK</div>
                </div>
              </MenuItem>
              <MenuItem value="en">
                <div className="flex gap-2">
                  <img src="https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.2/Assets/SVG/GB.svg" />{' '}
                  <div>EN</div>
                </div>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <WeatherNavigation />
    </div>
  );
};

export default Header;
