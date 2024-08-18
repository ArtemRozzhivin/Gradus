import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Divider } from '@mui/material';
import { dailyWeatherType } from '../../redux/Weather/types';
import { convertUnixToUkrainianDate } from '../../utils/convertUnixToUkrainianDate';
import { getWindDirection } from '../../utils/getWindDirection';
import WindArrow from '../WindArrow';
import { checkTempSign } from '../../utils/chekTempSign';
import { selectCities } from '../../redux/Cities/selectors';

interface DetailCardProps {
  current: dailyWeatherType;
}

const DetailCard: React.FC<DetailCardProps> = ({ current }) => {
  const { dayNum, month, dayOfWeek, time } = convertUnixToUkrainianDate(current.dt);
  const { t, i18n } = useTranslation();
  const sunrise = convertUnixToUkrainianDate(current.sunrise);
  const sunset = convertUnixToUkrainianDate(current.sunset);
  const { day, eve, morn, night } = current.temp;
  const { currentCity, userCity } = useSelector(selectCities);

  return (
    <div className='bg-lightApp dark:bg-darkApp shadow-xl p-5 rounded-2xl flex-col gap-3'>
      <div className='text-blue'>
        {Object.keys(currentCity).length ? (
          <div className='text-3xl'>
            {currentCity.name}, {currentCity.country}, {currentCity.state}
          </div>
        ) : (
          <div className='text-3xl'>
            {userCity.name}, {userCity.country}, {userCity.state}
          </div>
        )}
        <div className='text-2xl'>
          {dayNum} {t(`months.${month}`)}, {t(`week.${dayOfWeek}`)}, {time}
        </div>
      </div>

      <div className='flex items-center'>
        <div className='text-blue rounded-md p-2'>
          <div className='flex items-center'>
            <div>
              <div className='flex flex-col items-center gap-3 text-6xl'>
                {checkTempSign(current.temp.max)}°C
                <div className='h-1 w-full bg-blue' />
                {checkTempSign(current.temp.min)}°C
              </div>
            </div>
            <img
              width={80}
              height={80}
              src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`}
              alt='weather'
            />
          </div>

          <div>
            {i18n.language === 'en' ? current.weather[0].main : current.weather[0].description}
          </div>
        </div>

        <div className='w-full gap-5 items-center text-blue rounded-md p-2 grid grid-cols-2 grid-rows-2'>
          <div className='flex flex-col items-center'>
            <div className='text-3xl mb-1'>{t('weather.morning')}</div>
            <div className='text-xl flex gap-5'>
              <div className='flex flex-col items-center'>
                <div>{t('weather.temp.real')} </div>
                {checkTempSign(morn)}
              </div>
              <div className='flex flex-col items-center'>
                <div>{t('weather.temp.feels')} </div>
                {checkTempSign(current.feels_like.morn)}
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <div className='text-3xl mb-1'>{t('weather.day')}</div>
            <div className='text-xl flex gap-5'>
              <div>
                <div className='flex flex-col items-center'>{t('weather.temp.real')}</div>
                {checkTempSign(day)}
              </div>
              <div>
                <div className='flex flex-col items-center'>{t('weather.temp.feels')} </div>
                {checkTempSign(current.feels_like.day)}
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <div className='text-3xl mb-1'>{t('weather.evening')}</div>
            <div className='text-xl flex gap-5'>
              <div className='flex flex-col items-center'>
                <div>{t('weather.temp.real')}</div>
                {checkTempSign(eve)}
              </div>
              <div>
                <div className='flex flex-col items-center'>{t('weather.temp.feels')}</div>
                {checkTempSign(current.feels_like.eve)}
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <div className='text-3xl mb-1'>{t('weather.night')}</div>
            <div className='text-xl flex gap-5'>
              <div className='flex flex-col items-center'>
                <div>{t('weather.temp.real')}</div>
                {checkTempSign(night)}
              </div>
              <div>
                <div className='flex flex-col items-center'>{t('weather.temp.feels')}</div>
                {checkTempSign(current.feels_like.night)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      <div className='flex gap-2'>
        <div className='text-blue text-2xl flex w-full justify-center  items-center gap-5 p-2'>
          <div className='flex flex-col justify-center items-center'>
            {t('weather.humidity')}
            <div>{current.humidity}%</div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            {t('weather.pressure')}
            <div>{current.pressure} mm Hg. Art.</div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            {t('weather.cloudiness')}
            <div>{current.clouds}%</div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            {t('weather.uvi')}
            <div>{current.uvi}</div>
          </div>
        </div>
      </div>

      <Divider />

      <div className='flex justify-center gap-5 text-blue rounded-md text-2xl p-2'>
        <div className='flex flex-col justify-center items-center'>
          {t('weather.wind.speed')}
          <div className='text-2xl'>
            {current.wind_speed} {t('unit.speed')}
          </div>
        </div>

        <div className='flex flex-col justify-center items-center'>
          {t('weather.wind.direction')}
          <div className='text-2xl'>
            <WindArrow direction={getWindDirection(current.wind_deg)} />
          </div>
        </div>
      </div>

      <Divider />

      <div className='flex justify-center gap-5 text-blue rounded-md text-3xl p-2'>
        <div className='flex flex-col justify-center items-center'>
          {t('weather.sun.east')}
          <div className='text-2xl'>{sunrise.time}</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          {t('weather.sun.west')}
          <div className='text-2xl'>{sunset.time}</div>
        </div>

        <div className='flex flex-col justify-center items-center'>
          {t('weather.moon.east')}
          <div className='text-2xl'>{sunrise.time}</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          {t('weather.moon.west')}
          <div className='text-2xl'>{sunset.time}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
