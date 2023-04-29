import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchCities } from '../../redux/Cities/asyncFetchCities';
import { addCityToRecent, changeCurrentCity } from '../../redux/Cities/slice';
import { CityType } from '../../redux/Cities/types';
import { fetchUserLocation } from '../../redux/Locations/asyncFetchUserLocation';
import { selectLocations } from '../../redux/Locations/selectors';
import { changeCurrentLocation } from '../../redux/Locations/slice';
import { useAppDispatch } from '../../redux/store';
import { fetchWeather } from '../../redux/Weather/asyncFetchWeather';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Modal from '../../ui/Modal';
import CityCard from '../CityCard';

interface SearchWeatherType {
  cities: CityType[];
}

const SearchWeather: React.FC<SearchWeatherType> = ({ cities }) => {
  const dispatch = useAppDispatch();

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
    dispatch(changeCurrentLocation({ lat, lon }));
    dispatch(addCityToRecent(city));
    dispatch(changeCurrentCity(city));
    dispatch(fetchWeather({ lat, lon }));
  };

  useEffect(() => {
    dispatch(fetchUserLocation());
  }, []);

  return (
    <div className="flex gap-3">
      <Input value={searchCity} onChange={getWeather} placeholder="Місто" />
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
