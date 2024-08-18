export const checkTempSign = (temp: number) => {
  return temp < 0 ? `-${temp}` : `+${temp}`;
};
