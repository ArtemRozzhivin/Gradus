export const getLatLon = (arr: [string, string]): { lat: number; lon: number } => {
  return {
    lat: Number(arr[0]),
    lon: Number(arr[1]),
  };
};
