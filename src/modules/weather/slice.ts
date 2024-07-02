import { createSlice } from '@reduxjs/toolkit';

import { WEATHER_SLICE_NAME } from './action';
import { getLocationWeatherReducer, getWeekWeatherReducer } from './reducers';
import { WeatherData } from '../../interfaces/weather.interfaces';

export interface WeatherSliceState {
  isLoading: boolean;
  current: WeatherData | null;
  week: WeatherData[] | null;
}

export const initialState: WeatherSliceState = {
  current: null,
  week: null,
  isLoading: false,
};

const weatherSlice = createSlice({
  name: WEATHER_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getLocationWeatherReducer(builder);
    getWeekWeatherReducer(builder);
  },
});

export const weatherReducer = weatherSlice.reducer;
