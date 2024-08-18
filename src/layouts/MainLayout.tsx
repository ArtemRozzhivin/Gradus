import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MapCard from '../components/MapCard';
import { selectLocations } from '../redux/locations/selectors';

const MainLayout: React.FC = () => {
  const { userLocation, currentLocation } = useSelector(selectLocations);

  return (
    <div className='relative max-w-container m-auto px-5 min-h-[100vh] flex flex-col gap-5 bg-light dark:bg-dark'>
      <Header />

      <div className='flex-auto flex flex-col gap-5'>
        <Outlet />

        {userLocation ? (
          <MapCard coord={Object.keys(currentLocation).length ? currentLocation : userLocation} />
        ) : (
          <div>Load</div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
