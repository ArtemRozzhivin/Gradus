import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { selectCities } from '../redux/Cities/selectors';

const MainLayout: React.FC = () => {
  const { currentCity } = useSelector(selectCities);

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
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
