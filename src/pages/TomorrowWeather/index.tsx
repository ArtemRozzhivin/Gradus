import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DetailHourCard from '../../components/DetailHourCard';
import HourCard from '../../components/Weather/HourCard';
import { useAppDispatch } from '../../redux/store';
import { selectWeather } from '../../redux/Weather/selectors';
import { changeTomorrowDetail } from '../../redux/Weather/slice';
import { hourlyWeatherType } from '../../redux/Weather/types';
import Button from '../../ui/Button';
import { convertUnixToUkrainianDate } from '../../utils/convertUnixToUkrainianDate';

const TomorrowWeather = () => {
  const dispatch = useAppDispatch();
  const { tomorrow, tomorrowDetail } = useSelector(selectWeather);

  const onChangeDetail = (hour: hourlyWeatherType) => {
    dispatch(changeTomorrowDetail(hour));
  };

  console.log(convertUnixToUkrainianDate(tomorrowDetail.dt).date);

  return (
    <div>
      <div className="flex gap-1 overflow-x-auto">
        {tomorrow.map((hour) => (
          <Button key={hour.dt} onClick={() => onChangeDetail(hour)}>
            <HourCard {...hour} />
          </Button>
        ))}
      </div>

      {tomorrow.length ? <DetailHourCard current={tomorrowDetail} /> : <div>Loading</div>}
    </div>
  );
};

export default TomorrowWeather;
