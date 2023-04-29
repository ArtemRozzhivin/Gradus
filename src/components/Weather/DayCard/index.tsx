import { AsyncThunkAction } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../redux/store';
import { dailyWeatherType } from '../../../redux/Weather/types';
import { convertUnixToUkrainianDate } from '../../../utils/convertUnixToUkrainianDate';
import { checkTempSign } from '../../../utils/chekTempSign';

const DayCard: React.FC<dailyWeatherType> = ({ dt, temp, weather }) => {
  const date = convertUnixToUkrainianDate(dt);
  return (
    <div className="text-center bg-inherit ">
      <div>{date.dayOfWeek}</div>
      <div>{date.date}</div>
      <div className="flex justify-center">
        <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} alt="weather" />
      </div>
      <div className="flex gap-3">
        <div>
          <div>мін.</div>
          <div>{checkTempSign(temp.min)}&#x00B0;</div>
        </div>
        <div>
          <div>макс.</div>
          <div>{checkTempSign(temp.max)}&#x00B0;</div>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
