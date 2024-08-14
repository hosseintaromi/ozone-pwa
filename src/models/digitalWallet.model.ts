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
  account_wallet: Data[];
  transactions: {
    amount: number;
    deleted_at: string;
    created_at: string;
    destination_id: number;
    id: number;
    ref_number: string;
    request_id: number;
    source_id: number;
    status: 'SUCCESS';
    type: 'WITHDRAW';
    updated_at: string;
  }[];
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

export type ChargeWalletResponseType = {
  bank_amount: number;
  payment_link: string;
  redirect_url: string;
};

export type walletStatusBody = { status: 'INACTIVE' | 'ACTIVE' };
export type chargeWalletBody = { amount: number };
