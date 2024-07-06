import { HydrationBoundary } from '@tanstack/react-query';

import { metadata as walletMetadata } from '@/components/app/wallet/meta';
import Wallet from '@/components/app/wallet/Wallet';

export const metadata = walletMetadata;
export default async function WalletPage() {
  return (
    <HydrationBoundary state={await getData()}>
      <Wallet />
    </HydrationBoundary>
  );
}

async function getData() {
  return true;
}
