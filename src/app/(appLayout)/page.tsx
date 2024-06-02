import { HydrationBoundary } from '@tanstack/react-query';

import { metadata as homeMetadata } from '@/components/app/home/meta';
import HOME from '@/components/app/home';

export const metadata = homeMetadata;
export default async function Home() {
  return (
    <HydrationBoundary state={await getData()}>
      <HOME />
    </HydrationBoundary>
  );
}

async function getData() {
  return true;
}
