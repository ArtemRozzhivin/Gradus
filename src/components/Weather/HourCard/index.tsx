import React from 'react';
import { useTranslation } from 'react-i18next';
import { convertUnixToUkrainianDate } from '../../../utils/convertUnixToUkrainianDate';
import { checkTempSign } from '../../../utils/chekTempSign';

interface HourCardInterface {
  dt: number;
  temp: number;
  feels_like: number;
  weather: [{ icon: string }];
  wind_speed: number;
}

const HourCard: React.FC<HourCardInterface> = ({ dt, temp, feels_like, weather, wind_speed }) => {
  const { time } = convertUnixToUkrainianDate(dt);
  const { t } = useTranslation();

  return (
    <div className='text-center bg-inherit'>
      <div className='flex flex-col justify-center items-center'>
        <div>{time}</div>
        <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} alt='weather' />
        <div className='flex gap-3'>
          <div>
            <div>{t('weather.temp.temp')}</div>
            <div>{checkTempSign(temp)}&#x00B0;</div>
          </div>
          <div>
            <div>{t('weather.temp.feels')}</div>
            <div>{checkTempSign(feels_like)}&#x00B0;</div>
          </div>
        </div>
        <div>
          {wind_speed} {t('unit.speed')}
        </div>
      </div>
    </div>
  );
};

export default HourCard;
