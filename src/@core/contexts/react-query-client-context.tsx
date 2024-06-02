'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

import { queryClientOptions } from '@/constant/query-client-options';

type Props = {
  children: ReactNode;
};

export default function ReactQueryClientContext({ children }: Props) {
  const [queryClient] = useState(() => new QueryClient(queryClientOptions));

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
