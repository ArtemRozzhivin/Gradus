import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { selectCities } from '../redux/Cities/selectors';
import { getUserLocations } from '../utils/getUserLocations';

const mapApiKey = process.env.REACT_APP_MAP_API_KEY;

const MainLayout: React.FC = () => {
  const { currentCity } = useSelector(selectCities);

  getUserLocations();

  return (
    <div className="relative max-w-container m-auto px-5 min-h-[100vh] flex flex-col gap-5">
      <Header />

      <div className="flex-auto flex flex-col gap-5">
        {Object.keys(currentCity).length ? (
          <div className="text-3xl">
            {currentCity.name}, {currentCity.country}, {currentCity.state}
          </div>
        ) : (
          ''
        )}

        <iframe
          width="100%"
          height="400"
          src={`https://api.maptiler.com/maps/hybrid/?key=${mapApiKey}#12.5/50.77/29.2493`}></iframe>

        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
