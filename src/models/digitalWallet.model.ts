export interface contract {
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
}

export interface WalletType {
  chargeable: boolean;
  color: string;
  id: number;
  is_master: false;
  legal_name: string;
  logo_base_url: string;
  logo_path: string;
  name: string;
  priority: number;
  type: string;
  contract: contract;
}
export interface AccountWalletType {
  id: number;
  balance: number;
  account_id: number;
  status: 'ACTIVE' | 'INACTIVE';
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
    contract: contract;
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
export type walletInquiry = {
  id: number;
  balance: number;
  account_id: number;
  status: string;
  name: string;
  type: string;
  available: boolean;
  inquiry_available: boolean;
  wallet: WalletType;
  discount: number;
};
export type walletStatusBody = { status: 'INACTIVE' | 'ACTIVE' };
export type chargeWalletBody = { amount: number }; //TODO atefe said this most be string => tell mehdi to fix it
export type walletInquiryBody = { wallet_id: string };
export type verifyWalletInquiryBody = { wallet_id: string; code: string };

export type qrBody = {
  serial: string;
  expire_at: string;
};
