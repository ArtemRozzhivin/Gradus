export type CitiesSliceType = {
  cities: CityType[];
  currentCity: CityType;
};

export type CityType = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
};
