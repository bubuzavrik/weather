import { useEffect } from 'react';

import { Box, Grid, Stack, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../modules/store';
import { asyncGetLocationWeather } from '../../modules/weather/action';
import { selectCurrentWeather, selectIsLoading } from '../../modules/weather/selectors';
import { Loading } from '../../shared-components/Loading';

interface Props {
  lat: number;
  lon: number;
}

export const CurrentWeather = ({ lat, lon }: Props) => {
  const dispatch = useAppDispatch();

  const currentWeather = useAppSelector(selectCurrentWeather);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(
      asyncGetLocationWeather({
        lat,
        lon,
      }),
    );
  }, [dispatch, lat, lon]);

  if (isLoading) return <Loading />;
  return currentWeather ? (
    <Stack direction="row" className="items-center">
      <Stack sx={{ flexGrow: 1 }} className="items-center">
        <Box sx={{ fontWeight: 'bold' }}> {currentWeather.name?.toUpperCase()}</Box>
        <Typography>WEATHER</Typography>
      </Stack>
      <Box
        component="img"
        sx={{
          height: 64,
          width: 64,
        }}
        alt="Weather"
        src={`https://openweathermap.org/img/w/${currentWeather.weather?.[0].icon}.png`}
      />
      <Stack sx={{ flexGrow: 1 }} className="items-center">
        <Box sx={{ fontWeight: 'bold', fontSize: 18 }}>{currentWeather.main.temp.toFixed(0)}°C</Box>
        <Typography sx={{ fontSize: 14 }} className="text-sm">
          {currentWeather.weather?.[0].main}
        </Typography>
      </Stack>
    </Stack>
  ) : (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100px' }}>
      <Typography align="center">No Current Week Data</Typography>
    </Grid>
  );
};
