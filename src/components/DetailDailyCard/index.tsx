import React from 'react';
import { useSelector } from 'react-redux';
import { dailyWeatherType } from '../../redux/Weather/types';
import { convertUnixToUkrainianDate } from '../../utils/convertUnixToUkrainianDate';
import { getWindDirection } from '../../utils/getWindDirection';
import WindArrow from '../WindArrow';
import { checkTempSign } from '../../utils/chekTempSign';
import { useTranslation } from 'react-i18next';

interface DetailCardProps {
  current: dailyWeatherType;
}

const DetailCard: React.FC<DetailCardProps> = ({ current }) => {
  const { date, dayOfWeek, time } = convertUnixToUkrainianDate(current.dt);
  const { t } = useTranslation();
  const sunrise = convertUnixToUkrainianDate(current.sunrise);
  const sunset = convertUnixToUkrainianDate(current.sunset);
  const moonrise = convertUnixToUkrainianDate(current.moonrise);
  const moonset = convertUnixToUkrainianDate(current.moonset);
  const { day, eve, morn, night, max, min } = current.temp;

  return (
    <div className="bg-app p-5 rounded-2xl flex-col gap-3">
      <div className="flex">
        <div className="bg-second rounded-md p-2">
          <div>
            {date}, {dayOfWeek}, {time}
          </div>

          <div className="flex items-center">
            <div>
              <div className="text-5xl">
                {t('weather.temp.max')}: {checkTempSign(current.temp.max)}
              </div>
              <div className="text-5xl">
                {t('weather.temp.min')}: {checkTempSign(current.temp.min)}
              </div>
            </div>
            <img
              width={80}
              height={80}
              src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`}
              alt="weather"
            />
          </div>

          <div>
            {current.weather[0].main} {current.weather[0].description}
          </div>
        </div>

        <div className="flex gap-5 items-center bg-second rounded-md p-2">
          <div className="flex flex-col items-center">
            <div>{t('weather.morning')}</div>
            <div>{checkTempSign(morn)}</div>
            <div>
              {t('weather.temp.feels')} {checkTempSign(current.feels_like.morn)}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>{t('weather.day')}</div>
            <div>{checkTempSign(day)}</div>
            <div>
              {t('weather.temp.feels')} {checkTempSign(current.feels_like.day)}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>{t('weather.evening')}</div>
            <div>{checkTempSign(eve)}</div>
            <div>
              {t('weather.temp.feels')} {checkTempSign(current.feels_like.eve)}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>{t('weather.night')}</div>
            <div>{checkTempSign(night)}</div>
            <div>
              {t('weather.temp.feels')} {checkTempSign(current.feels_like.night)}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
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

      <div className="bg-second rounded-md p-2">
        <div>
          {t('weather.sun.east')}: {sunrise.time}
        </div>
        <div>
          {t('weather.sun.west')}: {sunset.time}
        </div>
      </div>

      <div className="bg-second rounded-md p-2">
        <div>
          {t('weather.moon.east')}: {sunrise.time}
        </div>
        <div>
          {t('weather.moon.west')}: {sunset.time}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
