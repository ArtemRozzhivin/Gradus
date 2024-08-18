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
      <div className='gap-5 grid grid-rows-2 grid-cols-4 mb-5'>
        {daily.length ? (
          daily.map((obj) => (
            <div key={obj.dt}>
              <Button className='items-center' key={obj.dt} onClick={() => onChangeDetail(obj)}>
                <DayCard {...obj} />
              </Button>
            </div>
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
