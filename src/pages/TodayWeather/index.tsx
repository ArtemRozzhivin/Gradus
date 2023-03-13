import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DetailHourCard from '../../components/DetailHourCard';
import HourCard from '../../components/Weather/HourCard';
import { useAppDispatch } from '../../redux/store';
import { selectWeather } from '../../redux/Weather/selectors';
import { changeTodayDetail } from '../../redux/Weather/slice';
import { hourlyWeatherType } from '../../redux/Weather/types';
import Button from '../../ui/Button';

const TodayWeather = () => {
  const dispatch = useAppDispatch();
  const { today, todayDetail } = useSelector(selectWeather);

  const onChangeDetail = (hour: hourlyWeatherType) => {
    dispatch(changeTodayDetail(hour));
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
