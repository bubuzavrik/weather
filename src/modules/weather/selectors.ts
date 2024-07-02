import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const selectState = (x: RootState) => x.weatherReducer;

export const selectCurrentWeather = createSelector(selectState, ({ current }) => current);

export const selectWeekWeather = createSelector(selectState, ({ week }) => week);

export const selectIsLoading = createSelector(selectState, ({ isLoading }) => isLoading);
