import React from 'react';
import { useTranslation } from 'react-i18next';
import { dailyWeatherType } from '../../../redux/Weather/types';
import { convertUnixToUkrainianDate } from '../../../utils/convertUnixToUkrainianDate';
import { checkTempSign } from '../../../utils/chekTempSign';

const DayCard: React.FC<dailyWeatherType> = ({ dt, temp, weather }) => {
  const { dayNum, month, dayOfWeek } = convertUnixToUkrainianDate(dt);
  const { t } = useTranslation();
  return (
    <div className='text-center bg-inherit '>
      <div>
        {dayNum} {t(`months.${month}`)}
      </div>
      <div>{t(`week.${dayOfWeek}`)}</div>
      <div className='flex justify-center'>
        <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} alt='weather' />
      </div>
      <div className='flex gap-3'>
        <div>
          <div>{t('weather.temp.min')}</div>
          <div>{checkTempSign(temp.min)}&#x00B0;</div>
        </div>
        <div>
          <div>{t('weather.temp.max')}</div>
          <div>{checkTempSign(temp.max)}&#x00B0;</div>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
