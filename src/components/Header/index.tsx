import React, { useState } from 'react';
import Input from '../../ui/Input';

const Header: React.FC = () => {
  const [searchWeather, setSearchWeather] = useState('');

  const getWeather = (value: string) => {
    setSearchWeather(value);
  };

  console.log(searchWeather);

  return (
    <div className="flex gap-7 p-5 bg-app rounded-b-xl w-full">
      <h1>Gradus</h1>
      <div className="flex-auto">
        <Input value={searchWeather} onChange={getWeather} />
      </div>
      <button>Recent locations</button>
    </div>
  );
};

export default Header;
