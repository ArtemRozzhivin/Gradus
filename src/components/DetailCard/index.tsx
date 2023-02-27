import React from 'react';
import { useSelector } from 'react-redux';
import { selectDailyWeather } from '../../redux/DailyWeather/selectors';
import { fetchDailyWeatherType } from '../../redux/DailyWeather/types';
import { convertUnixToUkrainianDate } from '../../utils/convertUnixToUkrainianDate';

interface DetailCardProps {
  current: fetchDailyWeatherType;
}

const DetailCard: React.FC<DetailCardProps> = ({ current }) => {
  const date = convertUnixToUkrainianDate(current.dt);
  const { day, eve, morn, night, max, min } = current.temp;

  return (
    <div className="bg-app p-5 rounded-2xl flex flex-col gap-3">
      <div className="bg-second rounded-md p-2">
        <div>Weather Name ---</div>
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
          <div>в день</div>
          <div>{day}</div>
          <div>{current.feels_like.day}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>ввечері</div>
          <div>{eve}</div>
          <div>{current.feels_like.eve}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>вночі</div>
          <div>{night}</div>
          <div>{current.feels_like.night}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>зранку</div>
          <div>{morn}</div>
          <div>{current.feels_like.morn}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>максимальна</div>
          <div>{max}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>мінімальна</div>
          <div>{min}</div>
        </div>
      </div>

      <div className="bg-second rounded-md p-2">
        <div>Вологість {current.humidity}%</div>
        <div>Тиск {current.pressure} mm Hg. Art.</div>
        <div>Ймовірність опадів {current.pop}%</div>
        <div>УФ {current.uvi}</div>
        <div>Швидкість вітру {current.wind_speed} м/сек</div>
        <div>Хмарність {current.clouds}%</div>
      </div>

      <div className="bg-second rounded-md p-2">
        <div>Схід сонця {current.sunrise}</div>
        <div>Захід сонця {current.sunset}</div>
      </div>

      <div className="bg-second rounded-md p-2">
        <div>Схід сонця {current.sunrise}</div>
        <div>Захід сонця {current.sunset}</div>
      </div>
    </div>
  );
};

export default DetailCard;
