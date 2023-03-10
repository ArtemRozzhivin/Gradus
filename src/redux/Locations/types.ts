export type LocationsSliceType = {
  userLocation: Locations;
  currentLocations: Locations;
};

export type Locations = {
  lat: number;
  lon: number;
};
