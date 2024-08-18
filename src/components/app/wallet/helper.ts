import { AccountWalletType } from '@/models/digitalWallet.model';
import { getQueryData } from '@/lib/get-query-client';
import { QUERY_KEYS } from '@/constant/query-key';

export function getWalletsFromCache(): AccountWalletType[] | undefined {
  return getQueryData<AccountWalletType[]>([QUERY_KEYS.GET_WALLET]);
}
