import { hourlyWeatherType } from '../redux/Weather/types';

export const separateWeatherByDay = <T extends hourlyWeatherType>(weather: T[]) => {
  const today = new Date().getDate();
  const tomorrow = new Date(Date.now() + 86400000).getDate(); // 86400000 - мілісекунд в добі
  const todayWeather: T[] = [];
  const tomorrowWeather: T[] = [];
  let foundTomorrow = false;

  for (const hour of weather) {
    const date = new Date(hour.dt * 1000);
    const hourOfDay = date.getHours();
    const day = date.getDate();

    if (day === today && hourOfDay >= 0 && hourOfDay <= 23) {
      todayWeather.push(hour);
    } else if (day === tomorrow && hourOfDay >= 0 && hourOfDay <= 23) {
      foundTomorrow = true;
      tomorrowWeather.push(hour);
    } else if (foundTomorrow) {
      break;
    }
  }

  return {
    today: todayWeather,
    tomorrow: tomorrowWeather,
  };
};
