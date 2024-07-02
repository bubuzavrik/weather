import { createAsyncThunk } from '@reduxjs/toolkit';

import { weatherApi } from '../../apis/weatherApi';
import { LocationData } from '../../interfaces/weather.interfaces';
import { showServerError } from '../../utils/modules.utils';
export const WEATHER_SLICE_NAME = 'weather';

export const asyncGetLocationWeather = createAsyncThunk(
  `${WEATHER_SLICE_NAME}/getLocationWeather`,
  async (payload: LocationData, { rejectWithValue }) => {
    try {
      const response = await weatherApi.getLocationWeather(payload);
      return response.data;
    } catch (e) {
      showServerError(e);
      return rejectWithValue(e);
    }
  },
);

export const asyncGetWeekWeather = createAsyncThunk(
  `${WEATHER_SLICE_NAME}/getWeekWeather`,
  async (payload: LocationData, { rejectWithValue }) => {
    try {
      const response = await weatherApi.getWeekWeather(payload);
      return response.data.list.filter((item, index) => index % 8 === 0);
    } catch (e) {
      showServerError(e);
      return rejectWithValue(e);
    }
  },
);
