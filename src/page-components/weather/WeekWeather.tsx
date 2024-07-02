import { useEffect } from 'react';

import { Grid, Stack, Typography } from '@mui/material';

import { WeekWeatherItem } from './WeekWeatherItem';
import { useAppDispatch, useAppSelector } from '../../modules/store';
import { asyncGetWeekWeather } from '../../modules/weather/action';
import { selectIsLoading, selectWeekWeather } from '../../modules/weather/selectors';
import { Loading } from '../../shared-components/Loading';

interface Props {
  lat: number;
  lon: number;
}

export const WeekWeather = ({ lat, lon }: Props) => {
  const dispatch = useAppDispatch();

  const weekWeathers = useAppSelector(selectWeekWeather);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(
      asyncGetWeekWeather({
        lat,
        lon,
      }),
    );
  }, [dispatch, lat, lon]);

  if (isLoading) return <Loading />;
  return weekWeathers?.length ? (
    <Stack direction="row" spacing={2} className="w-full">
      {weekWeathers?.map((weekWeather) => (
        <WeekWeatherItem key={weekWeather.dt} data={weekWeather} />
      ))}
    </Stack>
  ) : (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100px' }}>
      <Typography align="center">No Week Weather Data</Typography>
    </Grid>
  );
};
