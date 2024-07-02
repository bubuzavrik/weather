import { Box, Stack, Typography } from '@mui/material';
import { format, parseISO } from 'date-fns';

import { WeatherData } from '../../interfaces/weather.interfaces';

interface Props {
  data: WeatherData;
}

export const WeekWeatherItem = ({ data }: Props) => {
  const date = parseISO(data.dt_txt);
  const dayName = format(date, 'EEE');

  return (
    <Stack sx={{ flexGrow: 1 }} className="items-center">
      <Typography>{dayName}</Typography>
      <Box
        component="img"
        sx={{
          height: 32,
          width: 32,
        }}
        alt="Weather"
        src={`https://openweathermap.org/img/w/${data.weather?.[0].icon}.png`}
      />
      <Stack>
        <Typography className="text-blue-300">{data.main.temp_min.toFixed(0)}</Typography>
        <Typography className="text-red-300">{data.main.temp_max.toFixed(0)}</Typography>
      </Stack>
    </Stack>
  );
};
