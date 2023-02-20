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
    <div className="bg-second text-center text-xs rounded-lg p-2">
      <div>
        {name}, {country}, {state}
      </div>
      <div>
        lat: {lat}, lon: {lon}
      </div>
    </div>
  );
};

export default index;
