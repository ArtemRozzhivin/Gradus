import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCities } from '../redux/Cities/selectors';
import { changeCurrentCity, removeAllRecentCities } from '../redux/Cities/slice';
import { CityType } from '../redux/Cities/types';
import { fetchCurrentWeather } from '../redux/CurrentWeather/asyncFetchCurrentWeather';
import { fetchDailyWeather } from '../redux/DailyWeather/asyncFetchDailyWeather';
import { fetchHourlyWeather } from '../redux/HourlyWeather/asyncFetchHourlyWeather';
import { useAppDispatch } from '../redux/store';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import CityCard from './CityCard';

const RecentLocations: React.FC = () => {
  const dispatch = useAppDispatch();
  const { recentCities } = useSelector(selectCities);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const clickCityCard = (city: CityType) => {
    const lat = city.lat,
      lon = city.lon;

    console.log(city);

    closeModal();
    dispatch(changeCurrentCity(city));
    dispatch(fetchCurrentWeather({ lat, lon }));
    dispatch(fetchHourlyWeather({ lat, lon }));
    dispatch(fetchDailyWeather({ lat, lon }));
  };

  const onRemoveAll = () => {
    dispatch(removeAllRecentCities());
    closeModal();
  };
  return (
    <div>
      <Button onClick={() => setIsOpenModal(true)} primary>
        Recent locations
      </Button>

      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <ul className="flex items-center justify-center gap-3 flex-wrap">
          <Button onClick={onRemoveAll} red>
            Remove all cities
          </Button>
          {recentCities.map((city: CityType, index) => (
            <Button
              className="group"
              key={city.name + index}
              onClick={() => clickCityCard(city)}
              primary>
              <CityCard {...city} />
            </Button>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default RecentLocations;
