export type currentWeather = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    },
  ];
};

export type fetchCurrentWeatherProps = {
  lat: number;
  lon: number;
};

export type weatherSliceType = {
  current: currentWeather;
};
