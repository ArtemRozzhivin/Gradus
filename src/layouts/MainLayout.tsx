import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MapCard from '../components/MapCard';
import { selectCities } from '../redux/Cities/selectors';
import { getUserLocations } from '../utils/getUserLocations';

const MainLayout: React.FC = () => {
  const { currentCity } = useSelector(selectCities);
  const [coord, setCoord] = useState<{ lat: string | number; lon: string | number }>();

  useEffect(() => {
    getUserLocations().then((res) => setCoord({ lat: res[0], lon: res[1] }));
  }, []);

  useEffect(() => {
    if (Object.keys(currentCity).length) {
      setCoord({ lat: currentCity.lat, lon: currentCity.lon });
    }
  }, [currentCity]);

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

        {coord ? <MapCard coord={coord} /> : <div>Load</div>}

        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
