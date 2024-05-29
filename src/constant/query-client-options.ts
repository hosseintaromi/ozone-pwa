import { AxiosError } from 'axios';

export const queryClientOptions = {
  defaultOptions: {
    errorType: AxiosError,
    queries: {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
      retryOnMount: false,
    },
  },
};
