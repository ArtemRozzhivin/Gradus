import { useSelector } from 'react-redux';
import DetailHourCard from '../../components/DetailHourCard';
import HourCard from '../../components/Weather/HourCard';
import { useAppDispatch } from '../../redux/store';
import { selectWeather } from '../../redux/weather/selectors';
import { changeTomorrowDetail } from '../../redux/weather/slice';
import { hourlyWeatherType } from '../../redux/weather/types';
import Button from '../../ui/Button';

const TomorrowWeather = () => {
  const dispatch = useAppDispatch();
  const { tomorrow, tomorrowDetail } = useSelector(selectWeather);

  const onChangeDetail = (hour: hourlyWeatherType) => {
    dispatch(changeTomorrowDetail(hour));
  };

  return (
    <div>
      <div className='flex gap-1 overflow-x-auto mb-5'>
        {tomorrow.map((hour) => (
          <div key={hour.dt}>
            <Button onClick={() => onChangeDetail(hour)}>
              <HourCard {...hour} />
            </Button>
          </div>
        ))}
      </div>

      {tomorrow.length ? <DetailHourCard current={tomorrowDetail} /> : <div>Loading</div>}
    </div>
  );
};

export default TomorrowWeather;
