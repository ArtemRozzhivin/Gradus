import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCities } from '../redux/Cities/selectors';
import { changeCurrentCity, removeAllRecentCities, removeRecentCity } from '../redux/Cities/slice';
import { CityType } from '../redux/Cities/types';
import { changeCurrentLocation } from '../redux/Locations/slice';
import { Locations } from '../redux/Locations/types';
import { useAppDispatch } from '../redux/store';
import { fetchWeather } from '../redux/Weather/asyncFetchWeather';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import CityCard from './CityCard';

interface RecentLocationsType {
  recentCities: CityType[];
}

const RecentLocations: React.FC<RecentLocationsType> = ({ recentCities }) => {
  const dispatch = useAppDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const clickCityCard = (city: CityType) => {
    const lat = city.lat,
      lon = city.lon;

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
      <Button onClick={() => setIsOpenModal(true)} primary>
        Recent locations
      </Button>

      <Modal isOpen={isOpenModal} onClose={closeModal}>
        {recentCities.length ? (
          <ul className="flex items-center justify-center gap-3 flex-wrap">
            <Button onClick={onRemoveAll}>Remove all cities</Button>
            {recentCities.map((city: CityType, index) => (
              <div className="group relative">
                <Button key={city.name + index} onClick={() => clickCityCard(city)} primary>
                  <CityCard {...city} />
                </Button>
                <Button
                  onClick={() => onRemoveCity(city)}
                  className="group-hover:block hidden h-full absolute text-xl top-0 right-0 hover:text-white"
                  primary>
                  X
                </Button>
              </div>
            ))}
          </ul>
        ) : (
          <div>Ви не додавали міст!</div>
        )}
      </Modal>
    </div>
  );
};

export default RecentLocations;
