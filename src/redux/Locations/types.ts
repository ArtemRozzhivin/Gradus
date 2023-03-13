export type LocationsSliceType = {
  userLocation: Locations;
  currentLocation: Locations;
};

export type Locations = {
  lat: number;
  lon: number;
};
