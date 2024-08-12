import { AxiosError } from 'axios';

export const queryClientOptions = {
  defaultOptions: {
    errorType: AxiosError,
    queries: {
      keepPreviousData: false,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      retry: false,
      retryOnMount: false,
    },
  },
};
