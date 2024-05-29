import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';
const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;
export const getQueryData = <T>(queryKey) => getQueryClient().getQueryData<T>(queryKey);
