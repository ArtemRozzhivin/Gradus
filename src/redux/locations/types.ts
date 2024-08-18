export type Locations = {
  lat: number;
  lon: number;
};

export type LocationsSliceType = {
  userLocation: Locations;
  currentLocation: Locations;
};
