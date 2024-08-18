import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Divider from '@mui/material/Divider';
import WindArrow from '../../components/WindArrow';
import { selectWeather } from '../../redux/weather/selectors';
import { convertUnixToUkrainianDate } from '../../utils/convertUnixToUkrainianDate';
import { getWindDirection } from '../../utils/getWindDirection';
import { checkTempSign } from '../../utils/chekTempSign';
import { selectCities } from '../../redux/cities/selectors';

import humidSVG from '../../assets/SVG/humidity.svg';

const CurrentWeather = () => {
  const { currentCity, userCity } = useSelector(selectCities);
  const { current } = useSelector(selectWeather);
  const { t, i18n } = useTranslation();
  const { dayOfWeek, dayNum, month, time } = convertUnixToUkrainianDate(current.dt);

  return Object.keys(current).length !== 0 ? (
    <div className='bg-lightApp dark:bg-darkApp shadow-xl p-5 rounded-2xl flex-col gap-3'>
      <div className='flex justify-center text-center'>
        <div className='text-blue rounded-md p-2'>
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

          <div>
            <div className='flex items-center'>
              <div className='text-7xl'>{checkTempSign(current.temp)}°C</div>
              <img
                width={80}
                height={80}
                src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`}
                alt='weather'
              />
            </div>
            <div>
              {t('weather.temp.feelsLike')}: {checkTempSign(current.feels_like)}°C
            </div>

            <div>
              {i18n.language === 'en' ? current.weather[0].main : current.weather[0].description}
            </div>
          </div>
        </div>
      </div>

      <Divider />

      <div className='flex gap-2'>
        <div className='text-blue text-2xl flex w-full justify-center  items-center gap-5 p-2'>
          <div className='flex flex-col justify-center items-center'>
            <img src={humidSVG} alt='humidity' />
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
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default CurrentWeather;
