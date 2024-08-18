import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchCities } from '../../redux/cities/asyncFetchCities';
import { addCityToRecent, changeCurrentCity } from '../../redux/cities/slice';
import { CityType } from '../../redux/cities/types';
import { fetchUserLocation } from '../../redux/locations/asyncFetchUserLocation';
import { changeCurrentLocation } from '../../redux/locations/slice';
import { useAppDispatch } from '../../redux/store';
import { fetchWeather } from '../../redux/weather/asyncFetchWeather';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Modal from '../../ui/Modal';
import CityCard from '../CityCard';

interface SearchWeatherType {
  cities: CityType[];
}

const SearchWeather: React.FC<SearchWeatherType> = ({ cities }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

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
    const { lat } = city;
    const { lon } = city;

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
    <div className='flex gap-3'>
      <Input value={searchCity} onChange={getWeather} placeholder={t('header.city')} />
      <Button onClick={() => getCities()}>{t('header.search')}</Button>

      <Modal onClose={closeModal} isOpen={isOpenModal}>
        <ul className='flex items-center justify-center gap-3 flex-wrap'>
          {cities.map((city: CityType) => (
            <Button key={city.name + city.lat + city.lon} onClick={() => clickCityCard(city)}>
              <CityCard {...city} />
            </Button>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default SearchWeather;
