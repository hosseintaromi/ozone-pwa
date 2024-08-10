import { Wallets } from '@/models/digitalWallet';
import { getQueryData } from '@/lib/get-query-client';
import { QUERY_KEYS } from '@/constant/query-key';

export function getWalletsFromCache(): Wallets[] | undefined {
  return getQueryData<Wallets[]>([QUERY_KEYS.GET_WALLET]);
}
