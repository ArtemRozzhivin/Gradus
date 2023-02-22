import React from 'react';
import Button from '../../ui/Button';

export interface CityCardInterface {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
  onClickCityCard: (lat: number, lon: number) => void;
}

const index: React.FC<CityCardInterface> = ({
  name,
  lat,
  lon,
  country,
  state,
  onClickCityCard,
}) => {
  return (
    <Button primary onClick={() => onClickCityCard(lat, lon)}>
      <div>
        {name}, {country}, {state}
      </div>
      <div>
        lat: {lat}, lon: {lon}
      </div>
    </Button>
  );
};

export default index;
