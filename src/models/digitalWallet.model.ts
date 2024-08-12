export interface Wallets {
  id: number;
  balance: number;
  account_id: number;
  status: string;
  name: string;
  type: string;
  available: boolean;
  inquiry_available: boolean;
  discount: number;
  wallet: {
    id: number;
    chargeable: boolean;
    is_master: boolean;
    color: string;
    contract: {
      id: number;
      status: string;
      provider_id: number;
      provider: {
        id: number;
        name: string;
        legal_name: string;
        created_at: string;
      };
      expired_at: string;
      created_at: string;
    };
    rules: string;
    name: string;
    type: string;
    logo_base_url: string;
    logo_path: string;
  };
}
export type WalletTransactionListReturnResult<Data> = {
  data: Data[];
  meta: {
    pagination: {
      current_page: number;
      from: number;
      last_page: number;
      per_page: number;
      to: number;
      count: number;
      total_pages: number;
    };
  };
};
