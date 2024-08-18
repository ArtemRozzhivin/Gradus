import { useSelector } from 'react-redux';
import DetailHourCard from '../../components/DetailHourCard';
import HourCard from '../../components/Weather/HourCard';
import { useAppDispatch } from '../../redux/store';
import { selectWeather } from '../../redux/weather/selectors';
import { changeTodayDetail } from '../../redux/weather/slice';
import { hourlyWeatherType } from '../../redux/weather/types';
import Button from '../../ui/Button';

const TodayWeather = () => {
  const dispatch = useAppDispatch();
  const { today, todayDetail } = useSelector(selectWeather);

  const onChangeDetail = (hour: hourlyWeatherType) => {
    dispatch(changeTodayDetail(hour));
  };

  return (
    <div>
      <div className='flex gap-1 justify-center overflow-x-auto mb-5'>
        {today.map((hour) => (
          <div key={hour.dt}>
            <Button key={hour.dt} onClick={() => onChangeDetail(hour)}>
              <HourCard {...hour} />
            </Button>
          </div>
        ))}
      </div>

      {today.length ? <DetailHourCard current={todayDetail} /> : <div>Loading</div>}
    </div>
  );
};

export default TodayWeather;
