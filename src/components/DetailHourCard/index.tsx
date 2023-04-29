import React from 'react';
import { hourlyWeatherType } from '../../redux/Weather/types';
import { convertUnixToUkrainianDate } from '../../utils/convertUnixToUkrainianDate';
import { getWindDirection } from '../../utils/getWindDirection';
import WindArrow from '../WindArrow';

interface DetailCardProps {
  current: hourlyWeatherType;
}

const DetailHourCard: React.FC<DetailCardProps> = ({ current }) => {
  const { dayOfWeek, date, time } = convertUnixToUkrainianDate(current.dt);

  return (
    <div className="bg-app p-5 rounded-2xl flex flex-col gap-3">
      <div className="bg-second rounded-md p-2">
        <div>
          {date}, {dayOfWeek}, {time}
        </div>

        <div>
          {current.weather[0].main} {current.weather[0].description}
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`}
          alt="weather"
        />
      </div>

      <div className="flex gap-5 items-center bg-second rounded-md p-2">
        <div className="flex flex-col items-center">
          <div>Температура</div>
          <div>{current.temp}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>відчувається як</div>
          <div>{current.feels_like}</div>
        </div>
      </div>

      <div className="bg-second rounded-md p-2">
        <div>Вологість {current.humidity}%</div>
        <div>Тиск {current.pressure} mm Hg. Art.</div>
        <div>УФ {current.uvi}</div>
        <div>Швидкість вітру {current.wind_speed} м/сек</div>
        <div>
          <WindArrow direction={getWindDirection(current.wind_deg)} />
        </div>
        <div>Хмарність {current.clouds}%</div>
      </div>
    </div>
  );
};

export default DetailHourCard;
