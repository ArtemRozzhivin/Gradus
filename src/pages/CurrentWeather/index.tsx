import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { selectWeather } from '../../redux/Weather/selectors';
import { convertUnixToUkrainianDate } from '../../utils/convertUnixToUkrainianDate';

const CurrentWeather = () => {
  const dispatch = useAppDispatch();
  const { current } = useSelector(selectWeather);
  const date = convertUnixToUkrainianDate(current.dt);
  const sunrise = convertUnixToUkrainianDate(current.sunrise);
  const sunset = convertUnixToUkrainianDate(current.sunset);

  return Object.keys(current).length !== 0 ? (
    <div className="bg-app p-5 rounded-2xl flex flex-col gap-3">
      <div>Current Weather</div>
      <div className="bg-second rounded-md p-2">
        <div>{date.date}</div>
        <div>{date.dayOfWeek}</div>
        <div>
          {current.weather[0].main} {current.weather[0].description}
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`}
          alt="weather"
        />
      </div>

      <div className="flex gap-5 items-center bg-second rounded-md p-2">
        <div className="text-2xl">Температура</div>
        <div className="flex flex-col items-center">
          <div>температура</div>
          <div>{current.temp}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>відчувається як</div>
          <div>{current.feels_like}</div>
        </div>
      </div>

      <div className="bg-second rounded-md p-2">
        <div>Видимість {current.visibility} метрів</div>
        <div>Вологість {current.humidity}%</div>
        <div>Тиск {current.pressure} mm Hg. Art.</div>
        <div>УФ {current.uvi}</div>
        <div>Швидкість вітру {current.wind_speed} м/сек</div>
        <div>Хмарність {current.clouds}%</div>
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
