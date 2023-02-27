export type fetchDailyWeatherType = {
  dt: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  clouds: number;
  pop: number;
  sunrise: number;
  sunset: number;
  uvi: number;
  moonrise: number;
  moonset: number;
  temp: {
    day: number;
    eve: number;
    morn: number;
    night: number;
    max: number;
    min: number;
  };
  feels_like: {
    day: number;
    eve: number;
    morn: number;
    night: number;
  };
  weather: [
    {
      description: string;
      icon: string;
      main: string;
    },
  ];
};

export type fetchDailyWeatherProps = {
  lat: number;
  lon: number;
};

export type dailyWeatherSliceType = {
  daily: fetchDailyWeatherType[];
};
