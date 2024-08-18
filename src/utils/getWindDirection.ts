export const getWindDirection = (degrees: number): string => {
  const directions = [
    'Північний',
    'Північно-Східний',
    'Східний',
    'Південно-Східний',
    'Південний',
    'Південно-Західний',
    'Західний',
    'Північно-Західний',
  ];
  const index = Math.round((degrees % 360) / 45);
  return directions[index % 8];
};
