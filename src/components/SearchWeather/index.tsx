import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchCities } from '../../redux/Cities/asyncFetchCities';
import { selectCities } from '../../redux/Cities/selectors';
import { addCityToRecent, changeCurrentCity } from '../../redux/Cities/slice';
import { CityType } from '../../redux/Cities/types';
import { fetchCurrentWeather } from '../../redux/CurrentWeather/asyncFetchCurrentWeather';
import { fetchDailyWeather } from '../../redux/DailyWeather/asyncFetchDailyWeather';
import { fetchHourlyWeather } from '../../redux/HourlyWeather/asyncFetchHourlyWeather';
import { fetchUserLocation } from '../../redux/Locations/asyncFetchUserLocation';
import { selectLocations } from '../../redux/Locations/selectors';
import { useAppDispatch } from '../../redux/store';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Modal from '../../ui/Modal';
import { getWindDirection } from '../../utils/getWindDirection';
import CityCard from '../CityCard';

interface SearchWeatherType {
  cities: CityType[];
}

const SearchWeather: React.FC<SearchWeatherType> = ({ cities }) => {
  const dispatch = useAppDispatch();
  const { userLocation } = useSelector(selectLocations);

  const [searchCity, setSearchCity] = useState('Malyn');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const getCities = () => {
    dispatch(fetchCities(searchCity));
    setIsOpenModal(true);
  };

  const getWeather = (value: string) => {
    setSearchCity(value);
  };

  const clickCityCard = (city: CityType) => {
    const lat = city.lat,
      lon = city.lon;

    closeModal();
    dispatch(addCityToRecent(city));
    dispatch(changeCurrentCity(city));
    dispatch(fetchCurrentWeather({ lat, lon }));
    dispatch(fetchHourlyWeather({ lat, lon }));
    dispatch(fetchDailyWeather({ lat, lon }));
  };

  useEffect(() => {
    dispatch(fetchUserLocation());
  }, []);

  return (
    <div className="flex gap-3">
      <Input value={searchCity} onChange={getWeather} />
      <Button primary onClick={() => getCities()}>
        Search
      </Button>

      <Modal onClose={closeModal} isOpen={isOpenModal}>
        <ul className="flex items-center justify-center gap-3 flex-wrap">
          {cities.map((city: CityType, index) => (
            <Button key={city.name + index} onClick={() => clickCityCard(city)} primary>
              <CityCard {...city} />
            </Button>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default SearchWeather;
