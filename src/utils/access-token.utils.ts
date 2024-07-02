import { LocalStorageKeys } from '../constants/local-storage.constants';

export const getAccessToken = () => {
  return localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN);
};

export const resetAccessToken = () => {
  localStorage.removeItem(LocalStorageKeys.ACCESS_TOKEN);
};
