import React from 'react';

export interface CityCardInterface {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

const index: React.FC<CityCardInterface> = ({ name, lat, lon, country, state }) => {
  return (
    <>
      <div>
        {name}, {country}, {state}
      </div>
      <div>
        lat: {lat}, lon: {lon}
      </div>
    </>
  );
};

export default index;
