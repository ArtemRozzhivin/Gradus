import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

const weatherNavbar = [
  { name: 'Current', route: '/' },
  { name: 'Today', route: '/today' },
  { name: 'Tomorrow', route: '/tomorrow' },
  { name: '8 days', route: '/8-days' },
];

const WeatherNavigation: React.FC = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center gap-2">
        {weatherNavbar.map((item) => (
          <Link key={item.name} to={item.route}>
            <Button>{item.name}</Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WeatherNavigation;
