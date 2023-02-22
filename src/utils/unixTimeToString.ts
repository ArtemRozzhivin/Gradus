export const unixTimeToString = (unixTime: number): string => {
  const date = new Date(unixTime * 1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = '0' + date.getMinutes();

  return `${day}/${month}/${year} ${hours}:${minutes.substr(-2)}`;
};
