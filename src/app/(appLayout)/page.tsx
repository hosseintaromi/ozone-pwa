import { HydrationBoundary } from '@tanstack/react-query';

import Home from '@/components/app/home/Home';
import { metadata as homeMetadata } from '@/components/app/home/meta';

export const metadata = homeMetadata;
export default async function HomePage() {
  return (
    <HydrationBoundary state={await getData()}>
      <Home />
    </HydrationBoundary>
  );
}

async function getData() {
  return true;
}
