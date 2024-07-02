import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { asyncGetLocationWeather, asyncGetWeekWeather } from './action';
import { WeatherSliceState } from './slice';
import { WeatherData } from '../../interfaces/weather.interfaces';

export function getLocationWeatherReducer(builder: ActionReducerMapBuilder<WeatherSliceState>) {
  builder.addCase(asyncGetLocationWeather.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    asyncGetLocationWeather.fulfilled,
    (state, { payload }: PayloadAction<WeatherData>) => {
      state.current = payload;
      state.isLoading = false;
    },
  );

  builder.addCase(asyncGetLocationWeather.rejected, (state) => {
    state.isLoading = false;
    state.current = null;
  });
}

export function getWeekWeatherReducer(builder: ActionReducerMapBuilder<WeatherSliceState>) {
  builder.addCase(asyncGetWeekWeather.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    asyncGetWeekWeather.fulfilled,
    (state, { payload }: PayloadAction<WeatherData[]>) => {
      state.week = payload;
      state.isLoading = false;
    },
  );

  builder.addCase(asyncGetWeekWeather.rejected, (state) => {
    state.isLoading = false;
    state.week = null;
  });
}
