import React from 'react';
import { useSelector } from 'react-redux';
import { Divider } from '@mui/material';
import { selectCities } from '../../redux/cities/selectors';
import SearchWeather from '../SearchWeather';
import WeatherNavigation from '../WeatherNavigation';
import RecentLocations from '../RecentLocations';
import SelectLang from '../SelectLang';

const Header: React.FC = () => {
  const { recentCities, cities } = useSelector(selectCities);

  return (
    <div className='flex flex-col gap-5 p-5 bg-lightApp dark:bg-darkApp shadow-xl rounded-b-xl w-full border-2 border-black'>
      <div className='flex items-center gap-7'>
        <h1 className='text-2xl text-blue'>Gradus</h1>
        <div className='flex-auto'>
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
