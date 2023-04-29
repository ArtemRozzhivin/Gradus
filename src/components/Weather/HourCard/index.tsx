import React from 'react';
import { convertUnixToUkrainianDate } from '../../../utils/convertUnixToUkrainianDate';

interface HourCardInterface {
  dt: number;
  temp: number;
  feels_like: number;
  weather: [{ icon: string }];
  wind_speed: number;
}

const HourCard: React.FC<HourCardInterface> = ({ dt, temp, feels_like, weather, wind_speed }) => {
  const { time } = convertUnixToUkrainianDate(dt);

  return (
    <div className="text-center bg-app rounded-2xl px-4 py-1">
      <div className="flex flex-col justify-center items-center">
        <div>{time}</div>
        <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} alt="weather" />
        <div className="flex gap-3">
          <div>
            <div>темп.</div>
            <div>{temp}&#x00B0;</div>
          </div>
          <div>
            <div>вічув.</div>
            <div>{feels_like}&#x00B0;</div>
          </div>
        </div>
        <div>{wind_speed} м/сек</div>
      </div>
    </div>
  );
};

export default HourCard;
