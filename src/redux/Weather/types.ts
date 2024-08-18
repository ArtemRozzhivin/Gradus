export type hourlyWeatherType = {
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

export type dailyWeatherType = {
  dt: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  wind_deg: number;
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

export type currentWeatherType = {
  dt: number;
  sunrise: number;
  sunset: number;
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

export type fetchWeatherType = {
  current: currentWeatherType;
  daily: dailyWeatherType[];
  hourly: hourlyWeatherType[];
};

export type fetchWeatherProps = {
  lat: number;
  lon: number;
};

export type weatherSliceType = {
  current: currentWeatherType;
  daily: dailyWeatherType[];
  dailyDetail: dailyWeatherType;
  today: hourlyWeatherType[];
  todayDetail: hourlyWeatherType;
  tomorrow: hourlyWeatherType[];
  tomorrowDetail: hourlyWeatherType;
};
