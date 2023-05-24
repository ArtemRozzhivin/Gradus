export const convertUnixToUkrainianDate = (unixDate: number) => {
  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];

  const date = new Date(unixDate * 1000);

  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const dayNum = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

  return {
    dayOfWeek,
    dayNum,
    month,
    time,
  };
};
