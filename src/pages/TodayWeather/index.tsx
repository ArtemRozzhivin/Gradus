import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DetailHourCard from '../../components/DetailHourCard';
import HourCard from '../../components/Weather/HourCard';
import { fetchHourlyWeather } from '../../redux/HourlyWeather/asyncFetchHourlyWeather';
import { selectHourlyWeather } from '../../redux/HourlyWeather/selectors';
import { changeTodayDetailCard } from '../../redux/HourlyWeather/slice';
import { hourlyWeather } from '../../redux/HourlyWeather/types';
import { useAppDispatch } from '../../redux/store';
import Button from '../../ui/Button';

const TodayWeather = () => {
  const dispatch = useAppDispatch();
  const { today, todayDetail } = useSelector(selectHourlyWeather);

  // useEffect(() => {
  //   dispatch(fetchHourlyWeather({ lat: 50.42, lon: 30 }));
  // }, []);

  const onChangeDetail = (hour: hourlyWeather) => {
    dispatch(changeTodayDetailCard(hour));
  };

  return (
    <div>
      <div className="flex gap-1 overflow-x-auto">
        {today.map((hour) => (
          <Button key={hour.dt} onClick={() => onChangeDetail(hour)}>
            <HourCard {...hour} />
          </Button>
        ))}
      </div>

      {today.length ? <DetailHourCard current={todayDetail} /> : <div>Loading</div>}
    </div>
  );
};

export default TodayWeather;
