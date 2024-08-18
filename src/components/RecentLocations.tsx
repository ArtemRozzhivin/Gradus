import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { changeCurrentCity, removeAllRecentCities, removeRecentCity } from '../redux/cities/slice';
import { CityType } from '../redux/cities/types';
import { changeCurrentLocation } from '../redux/locations/slice';
import { useAppDispatch } from '../redux/store';
import { fetchWeather } from '../redux/weather/asyncFetchWeather';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import CityCard from './CityCard';

interface RecentLocationsType {
  recentCities: CityType[];
}

const RecentLocations: React.FC<RecentLocationsType> = ({ recentCities }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const clickCityCard = (city: CityType) => {
    const { lat } = city;
    const { lon } = city;

    closeModal();
    dispatch(changeCurrentLocation({ lat, lon }));
    dispatch(changeCurrentCity(city));
    dispatch(fetchWeather({ lat, lon }));
  };

  const onRemoveAll = () => {
    dispatch(removeAllRecentCities());
    closeModal();
  };

  const onRemoveCity = (city: CityType) => {
    dispatch(removeRecentCity(city));
  };

  return (
    <div>
      <Button onClick={() => setIsOpenModal(true)}>{t('header.recent')}</Button>

      <Modal isOpen={isOpenModal} onClose={closeModal}>
        {recentCities.length ? (
          <ul className='flex items-center justify-center gap-3 flex-wrap'>
            <Button onClick={onRemoveAll}>{t('removeAllCities')}</Button>
            {recentCities.map((city: CityType, index) => (
              <div key={city.name + city.lat + city.lon} className='group relative'>
                <Button onClick={() => clickCityCard(city)}>
                  <CityCard {...city} />
                </Button>
                <Button
                  onClick={() => onRemoveCity(city)}
                  className='group-hover:block hidden h-full absolute text-xl top-0 right-0 hover:text-white'>
                  X
                </Button>
              </div>
            ))}
          </ul>
        ) : (
          <div>{t('emptyRecent')}</div>
        )}
      </Modal>
    </div>
  );
};

export default RecentLocations;
