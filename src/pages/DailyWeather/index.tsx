import React from 'react';
import { useSelector } from 'react-redux';
import DetailCard from '../../components/DetailCard';
import DayCard from '../../components/Weather/DayCard';
import { selectDailyWeather } from '../../redux/DailyWeather/selectors';
import { changeDetailCard } from '../../redux/DailyWeather/slice';
import { fetchDailyWeatherType } from '../../redux/DailyWeather/types';
import { useAppDispatch } from '../../redux/store';
import Button from '../../ui/Button';

const DailyWeather: React.FC = () => {
  const dispatch = useAppDispatch();
  const { daily, detail } = useSelector(selectDailyWeather);

  const onChangeDetail = (obj: fetchDailyWeatherType) => {
    dispatch(changeDetailCard(obj));
  };

  return (
    <div>
      <div className="flex justify-center gap-2 flex-wrap">
        {daily.length ? (
          daily.map((obj) => (
            <Button key={obj.dt} onClick={() => onChangeDetail(obj)}>
              <DayCard {...obj} />
            </Button>
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>

      {daily.length ? <DetailCard current={detail} /> : <div>Loading</div>}
    </div>
  );
};

export default DailyWeather;
