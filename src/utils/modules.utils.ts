import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { DEFAULT_ERROR_MESSAGE } from '../constants/modules.constants';
import { ServerError } from '../interfaces/modules.interfaces';

export const showServerError = (error: unknown) => {
  const err = error as AxiosError<ServerError>;

  const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;

  toast.error(message);
};
