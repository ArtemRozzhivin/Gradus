import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MapCard from '../components/MapCard';
import { selectCities } from '../redux/Cities/selectors';
import { selectLocations } from '../redux/Locations/selectors';

const MainLayout: React.FC = () => {
  const { currentCity } = useSelector(selectCities);
  const { userLocation } = useSelector(selectLocations);

  useEffect(() => {}, []);

  useEffect(() => {}, [currentCity]);

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

        <Outlet />

        {userLocation ? <MapCard coord={userLocation} /> : <div>Load</div>}
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
