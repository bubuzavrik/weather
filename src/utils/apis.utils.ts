import { LocationData } from '../interfaces/weather.interfaces';

export const generateQueryString = (query: LocationData) =>
  Object.keys(query)
    .map((queryKey) => `&${queryKey}=${query[queryKey] ?? ''}`)
    .join('');
