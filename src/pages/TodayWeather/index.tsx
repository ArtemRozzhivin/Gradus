import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import HourCard from '../../components/Weather/HourCard';
import { fetchHourlyWeather } from '../../redux/HourlyWeather/asyncFetchHourlyWeather';
import { selectHourlyWeather } from '../../redux/HourlyWeather/selectors';
import { useAppDispatch } from '../../redux/store';

const TodayWeather = () => {
  const dispatch = useAppDispatch();
  const { today } = useSelector(selectHourlyWeather);
  console.log(today);

  useEffect(() => {
    dispatch(fetchHourlyWeather({ lat: 50.42, lon: 30 }));
  }, []);

  return (
    <div>
      <div className="flex gap-1 overflow-x-scroll">
        {today.map((hour) => (
          <HourCard key={hour.dt} {...hour} />
        ))}
      </div>
    </div>
  );
};

export default TodayWeather;
