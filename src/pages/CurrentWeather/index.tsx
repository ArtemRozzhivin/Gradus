import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import WindArrow from '../../components/WindArrow';
import { useAppDispatch } from '../../redux/store';
import { selectWeather } from '../../redux/Weather/selectors';
import { convertUnixToUkrainianDate } from '../../utils/convertUnixToUkrainianDate';
import { getWindDirection } from '../../utils/getWindDirection';
import { checkTempSign } from '../../utils/chekTempSign';

const CurrentWeather = () => {
  const { current } = useSelector(selectWeather);
  const { dayOfWeek, date, time } = convertUnixToUkrainianDate(current.dt);
  const sunrise = convertUnixToUkrainianDate(current.sunrise);
  const sunset = convertUnixToUkrainianDate(current.sunset);

  console.log(getWindDirection(current.wind_deg));

  return Object.keys(current).length !== 0 ? (
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
        <div>Відчувається як: {checkTempSign(current.feels_like)}</div>

        <div>
          {current.weather[0].main} {current.weather[0].description}
        </div>
      </div>

      <div className="gap-5 items-center bg-second rounded-md p-2">
        <div>Вологість: {current.humidity}%</div>
        <div>Тиск: {current.pressure} mm Hg. Art.</div>
        <div>Хмарність: {current.clouds}%</div>
        <div>УФ: {current.uvi}</div>
      </div>

      <div className="gap-5 items-center bg-second rounded-md p-2">
        <div>Швидкість вітру: {current.wind_speed} м/сек</div>
        <div className="flex flex-col items-center gap-3">
          <div>Напрям вітру</div>
          <WindArrow direction={getWindDirection(current.wind_deg)} />
        </div>
      </div>

      <div className="bg-second rounded-md p-2">
        <div>Схід сонця {sunrise.time}</div>
        <div>Захід сонця {sunset.time}</div>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default CurrentWeather;
