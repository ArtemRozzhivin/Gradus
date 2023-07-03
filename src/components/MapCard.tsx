import React from 'react'

const mapApiKey = process.env.REACT_APP_MAP_API_KEY

interface MapCardType {
  coord: { lat: string | number; lon: string | number };
}

const MapCard: React.FC<MapCardType> = ({ coord }) => {
  return (
    <div className='w-full p-5 rounded-2xl flex justify-center items-center bg-lightApp dark:bg-darkApp shadow-xl'>
      <iframe
				title='maptilerMap'
        className='rounded-2xl'
        width='100%'
        height='400'
        src={`https://api.maptiler.com/maps/hybrid/?key=${mapApiKey}#12.5/${coord.lat}/${coord.lon}`} />
    </div>
  )
}

export default MapCard
