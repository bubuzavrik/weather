import { TextField } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useAppDispatch } from '../../modules/store';
import { asyncGetLocationWeather, asyncGetWeekWeather } from '../../modules/weather/action';

export const SearchCityForm = () => {
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<{ city: string }>();

  const onSubmit: SubmitHandler<{ city: string }> = ({ city }) => {
    dispatch(asyncGetLocationWeather({ q: city }));
    dispatch(asyncGetWeekWeather({ q: city }));
  };

  return (
    <form style={{ margin: '1rem' }} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="city"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            helperText={error ? error.message : null}
            size="small"
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            label="City Name"
            variant="outlined"
          />
        )}
      />
    </form>
  );
};
