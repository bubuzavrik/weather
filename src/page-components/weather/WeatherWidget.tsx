import { useEffect, useState } from 'react';

import { Grid, Typography, useMediaQuery } from '@mui/material';

import { CurrentWeather } from './CurrentWeather';
import { WeekWeather } from './WeekWeather';

export const WeatherWidget = () => {
  const isDarkModeEnabled = useMediaQuery('(prefers-color-scheme: dark)');

  const [coordinates, setCoordinates] = useState<{ lat: number; lon: number }>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lon: longitude });
    });
  }, []);

  if (!coordinates)
    return (
      <Typography align="center">Enable Geolocation / Wait for receiving your coords</Typography>
    );
  return (
    <Grid
      direction={{ xs: 'column', sm: 'row' }}
      alignItems="center"
      container
      style={{
        background: isDarkModeEnabled ? '#1f567c' : '#add8e6',
        color: isDarkModeEnabled ? '#ffffff' : '#1f567c',
        justifyContent: 'center',
        padding: '1rem',
        borderRadius: '1rem',
      }}
    >
      <Grid item lg={8} sm={6} xs={2}>
        <CurrentWeather {...coordinates} />
      </Grid>
      <Grid item lg={8} sm={2} xs={2}>
        <WeekWeather {...coordinates} />
      </Grid>
    </Grid>
  );
};
