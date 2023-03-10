export const convertUnixToUkrainianDate = (unixDate: number) => {
  const daysOfWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
  const months = [
    'Січ',
    'Лют',
    'Берез',
    'Квіт',
    'Трав',
    'Черв',
    'Лип',
    'Сер',
    'Верес',
    'Жовт',
    'Листоп',
    'Груд',
  ];

  const date = new Date(unixDate * 1000);

  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const time = date.toLocaleTimeString('uk-UA', { hour12: false });

  return {
    dayOfWeek,
    date: `${day} ${month}`,
    time,
    hours,
    minutes,
  } as { dayOfWeek: string; date: string; time: string; hours: number; minutes: number };
};
