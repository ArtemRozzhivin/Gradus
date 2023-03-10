import React from 'react';

const mapApiKey = process.env.REACT_APP_MAP_API_KEY;

interface MapCardType {
  coord: { lat: string | number; lon: string | number };
}

const MapCard: React.FC<MapCardType> = ({ coord }) => {
  return (
    <div>
      <iframe
        width="100%"
        height="400"
        src={`https://api.maptiler.com/maps/hybrid/?key=${mapApiKey}#12.5/${coord.lat}/${coord.lon}`}></iframe>
    </div>
  );
};

export default MapCard;
