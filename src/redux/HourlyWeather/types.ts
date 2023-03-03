export type HourlyWeatherSliceType = {
  today: hourlyWeather[];
  tomorrow: hourlyWeather[];
};

export type hourlyWeather = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    },
  ];
};

export type fetchHourlyWeatherProps = {
  lat: number;
  lon: number;
};
