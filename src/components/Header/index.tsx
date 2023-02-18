import React, { useState } from 'react';
import Input from '../../ui/Input';
import SearchWeather from '../SearchWeather';

const Header: React.FC = () => {
  return (
    <div className="flex items-center gap-7 p-5 bg-app rounded-b-xl w-full">
      <h1>Gradus</h1>
      <div className="flex-auto">
        <SearchWeather />
      </div>
      <button>Recent locations</button>
    </div>
  );
};

export default Header;
