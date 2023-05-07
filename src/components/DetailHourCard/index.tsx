import React from 'react';
import { hourlyWeatherType } from '../../redux/Weather/types';
import { convertUnixToUkrainianDate } from '../../utils/convertUnixToUkrainianDate';
import { getWindDirection } from '../../utils/getWindDirection';
import WindArrow from '../WindArrow';
import { checkTempSign } from '../../utils/chekTempSign';
import { useTranslation } from 'react-i18next';

interface DetailCardProps {
  current: hourlyWeatherType;
}

const DetailHourCard: React.FC<DetailCardProps> = ({ current }) => {
  const { dayOfWeek, date, time } = convertUnixToUkrainianDate(current.dt);

  const { t } = useTranslation();

  return (
    <div className="bg-app p-5 rounded-2xl flex flex gap-3">
      <div className="bg-second rounded-md p-2">
        <div>
          {date}, {dayOfWeek}, {time}
        </div>

        <div className="flex items-center">
          <div className="text-7xl">{checkTempSign(current.temp)}</div>
          <img
            width={80}
            height={80}
            src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`}
            alt="weather"
          />
        </div>
        <div>
          {t('weather.temp.feelsLike')}: {checkTempSign(current.feels_like)}
        </div>

        <div>
          {current.weather[0].main} {current.weather[0].description}
        </div>
      </div>

      <div className="gap-5 items-center bg-second rounded-md p-2">
        <div>
          {t('weather.humidity')}: {current.humidity}%
        </div>
        <div>
          {t('weather.pressure')}: {current.pressure} mm Hg. Art.
        </div>
        <div>
          {t('weather.cloudiness')}: {current.clouds}%
        </div>
        <div>
          {t('weather.uvi')}: {current.uvi}
        </div>
      </div>

      <div className="gap-5 items-center bg-second rounded-md p-2">
        <div>
          {t('weather.wind.speed')}: {current.wind_speed} {t('unit.speed')}
        </div>
        <div className="flex flex-col items-center gap-3">
          <div>{t('weather.wind.direction')}</div>
          <WindArrow direction={getWindDirection(current.wind_deg)} />
        </div>
      </div>
    </div>
  );
};

export default DetailHourCard;
