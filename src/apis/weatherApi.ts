import { AxiosRequestConfig } from 'axios';

import { httpApiClient } from '../configs/http-client.configs';
import { LocationData, WeekResponse } from '../interfaces/weather.interfaces';
import { generateQueryString } from '../utils/apis.utils';

export class WeatherApi {
  constructor(private url: string) {}

  getLocationWeather(query: LocationData, config?: AxiosRequestConfig) {
    return httpApiClient.get(`${this.url}/weather?${generateQueryString(query)}`, config);
  }

  getWeekWeather(query: LocationData, config?: AxiosRequestConfig) {
    return httpApiClient.get<WeekResponse>(
      `${this.url}/forecast?${generateQueryString(query)}`,
      config,
    );
  }
}

export const weatherApi = new WeatherApi('');
