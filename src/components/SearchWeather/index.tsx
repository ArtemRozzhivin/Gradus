import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCities } from '../../redux/cities/selectors';
import { fetchCities } from '../../redux/cities/slice';
import { useAppDispatch } from '../../redux/store';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Modal from '../../ui/Modal';
import CityCard, { CityCardInterface } from '../CityCard';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const SearchWeather = () => {
  const dispatch = useAppDispatch();
  const { cities } = useSelector(selectCities);
  const [searchCity, setSearchCity] = useState('');
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

  const clickCityCard = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="flex gap-3">
      <Input value={searchCity} onChange={getWeather} />
      <Button onClick={() => getCities()}>Search</Button>

      <Modal onClose={closeModal} isOpen={isOpenModal}>
        <ul className="flex items-center justify-center gap-3">
          {cities.map((city: CityCardInterface, index) => (
            <Button key={city.name + index} onClick={clickCityCard}>
              <CityCard {...city} />
            </Button>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default SearchWeather;
