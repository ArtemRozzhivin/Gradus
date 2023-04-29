import { currentWeatherType, weatherSliceType, dailyWeatherType, hourlyWeatherType } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchWeather } from './asyncFetchWeather';

const initialState: weatherSliceType = {
  current: {} as currentWeatherType,
  daily: [],
  dailyDetail: {} as dailyWeatherType,
  today: [],
  todayDetail: {} as hourlyWeatherType,
  tomorrow: [],
  tomorrowDetail: {} as hourlyWeatherType,
};

const separateWeatherByDay = (weather: hourlyWeatherType[]) => {
  const today = new Date().getDate();
  const tomorrow = new Date(Date.now() + 86400000).getDate(); // 86400000 - мілісекунд в добі
  const todayWeather: hourlyWeatherType[] = [];
  const tomorrowWeather: hourlyWeatherType[] = [];
  let foundTomorrow = false;

  for (const hour of weather) {
    const date = new Date(hour.dt * 1000);
    const hourOfDay = date.getHours();
    const day = date.getDate();

    if (day === today && hourOfDay >= 0 && hourOfDay <= 23) {
      todayWeather.push(hour);
    } else if (day === tomorrow && hourOfDay >= 0 && hourOfDay <= 23) {
      foundTomorrow = true;
      tomorrowWeather.push(hour);
    } else if (foundTomorrow) {
      break;
    }
  }

  return {
    today: todayWeather,
    tomorrow: tomorrowWeather,
  };
};

// function separateWeatherByDay(
//   weather: hourlyWeatherType[],
// ): [hourlyWeatherType[], hourlyWeatherType[]] {
//   const today = new Date().toLocaleDateString();
//   const tomorrow = new Date(Date.now() + 86400000).toLocaleDateString();
//   const todayWeather: hourlyWeatherType[] = [];
//   const tomorrowWeather: hourlyWeatherType[] = [];
//   let foundTomorrow = false;

//   for (const hour of weather) {
//     const date = new Date(hour.dt * 1000);
//     const formattedDate = date.toLocaleDateString();
//     const formattedTime = date.toLocaleTimeString();

//     if (formattedDate === today) {
//       todayWeather.push({ ...hour, dt: `${formattedDate} ${formattedTime}` });
//     } else if (formattedDate === tomorrow) {
//       foundTomorrow = true;
//       tomorrowWeather.push({ ...hour, dt: `${formattedDate} ${formattedTime}` });
//     } else if (foundTomorrow) {
//       // Якщо ми вже знайшли погоду на завтра, а цей об'єкт має дату після завтрешньої,
//       // то додавати його вже не потрібно, тому виходимо з циклу
//       break;
//     }
//   }

//   return [todayWeather, tomorrowWeather];
// }

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeDailyDetail: (state, action: PayloadAction<dailyWeatherType>) => {
      state.dailyDetail = action.payload;
    },
    changeTodayDetail: (state, action: PayloadAction<hourlyWeatherType>) => {
      state.todayDetail = action.payload;
    },
    changeTomorrowDetail: (state, action: PayloadAction<hourlyWeatherType>) => {
      state.tomorrowDetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state, action) => {});
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.current = action.payload.current;

      state.daily = action.payload.daily;
      state.dailyDetail = action.payload.daily[0];

      const today = separateWeatherByDay(action.payload.hourly).today;
      const tomorrow = separateWeatherByDay(action.payload.hourly).tomorrow;

      state.today = today;
      state.todayDetail = today[0];
      state.tomorrow = tomorrow;
      state.tomorrowDetail = tomorrow[0];
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {});
  },
});

export const { changeDailyDetail, changeTodayDetail, changeTomorrowDetail } = weatherSlice.actions;

export default weatherSlice.reducer;
