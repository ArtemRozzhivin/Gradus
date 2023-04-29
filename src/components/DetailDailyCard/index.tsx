import React from 'react';
import { useSelector } from 'react-redux';
import { dailyWeatherType } from '../../redux/Weather/types';
import { convertUnixToUkrainianDate } from '../../utils/convertUnixToUkrainianDate';
import { getWindDirection } from '../../utils/getWindDirection';
import WindArrow from '../WindArrow';
import { checkTempSign } from '../../utils/chekTempSign';

interface DetailCardProps {
  current: dailyWeatherType;
}

const DetailCard: React.FC<DetailCardProps> = ({ current }) => {
  const { date, dayOfWeek, time } = convertUnixToUkrainianDate(current.dt);
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
              <div className="text-5xl">MAX: {checkTempSign(current.temp.max)}</div>
              <div className="text-5xl">MIN: {checkTempSign(current.temp.min)}</div>
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
            <div>Ранок</div>
            <div>{checkTempSign(morn)}</div>
            <div>{checkTempSign(current.feels_like.morn)}</div>
          </div>
          <div className="flex flex-col items-center">
            <div>День</div>
            <div>{checkTempSign(day)}</div>
            <div>Відчувається:{checkTempSign(current.feels_like.day)}</div>
          </div>
          <div className="flex flex-col items-center">
            <div>Вечір</div>
            <div>{checkTempSign(eve)}</div>
            <div>{checkTempSign(current.feels_like.eve)}</div>
          </div>
          <div className="flex flex-col items-center">
            <div>Ніч</div>
            <div>{checkTempSign(night)}</div>
            <div>{checkTempSign(current.feels_like.night)}</div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
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
      </div>

      <div className="bg-second rounded-md p-2">
        <div>Схід сонця {sunrise.time}</div>
        <div>Захід сонця {sunset.time}</div>
      </div>

      <div className="bg-second rounded-md p-2">
        <div>Схід місяця {moonrise.time}</div>
        <div>Захід місяця {moonset.time}</div>
      </div>
    </div>
  );
};

export default DetailCard;
