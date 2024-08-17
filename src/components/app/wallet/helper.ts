import { WalletType } from '@/models/digitalWallet.model';
import { getQueryData } from '@/lib/get-query-client';
import { QUERY_KEYS } from '@/constant/query-key';

export function getWalletsFromCache(): WalletType[] | undefined {
  return getQueryData<WalletType[]>([QUERY_KEYS.GET_WALLET]);
}
