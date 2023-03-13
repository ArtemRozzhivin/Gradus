import React from 'react';
import { useSelector } from 'react-redux';
import DetailCard from '../../components/DetailDailyCard';
import DayCard from '../../components/Weather/DayCard';
import { useAppDispatch } from '../../redux/store';
import { selectWeather } from '../../redux/Weather/selectors';
import { changeDailyDetail } from '../../redux/Weather/slice';
import { dailyWeatherType } from '../../redux/Weather/types';
import Button from '../../ui/Button';

const DailyWeather: React.FC = () => {
  const dispatch = useAppDispatch();
  const { daily, dailyDetail } = useSelector(selectWeather);

  const onChangeDetail = (obj: dailyWeatherType) => {
    dispatch(changeDailyDetail(obj));
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

      {daily.length ? <DetailCard current={dailyDetail} /> : <div>Loading</div>}
    </div>
  );
};

export default DailyWeather;
