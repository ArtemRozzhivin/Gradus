export type CityType = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
};

export type CitiesSliceType = {
  cities: CityType[];
  recentCities: CityType[];
  currentCity: CityType;
  userCity: CityType;
};
