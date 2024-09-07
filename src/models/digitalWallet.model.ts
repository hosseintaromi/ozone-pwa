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
  wallet_type: {
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
  wallet: Data[];
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
  wallet_type: WalletType;
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
export type voucherBusinesses = {
  id: number;
  voucher_id: number;
  account_id: number;
  name: string;
  legal_name: string;
  logo_base_url: string;
  logo_path: string;
};
export type voucherType = {
  voucher_id: number;
  account_id: number;
  id: number;
  code: string;
  status: VOUCHER_STATUS;
  expired_at: string;
  voucher: {
    amount: number;
    amount_type: 'PRICE' | 'PERCENT';
    type: 'NORMAL' | 'PURCHASABLE' | 'SELECTABLE' | 'PROMOTION';
    max_percent_amount: number;
    purchase_amount: number;
    min_invoice_amount: number;
    usage_count: number;
    usage_count_per_account: number;
    start_at: string;
    end_at: string;
    expire_day_count: number;
    status: VOUCHER_STATUS;
    voucher_accounts: null;
    voucher_businesses: voucherBusinesses[];
  };
};

export type voucherParams = {
  status?: string;
  type?: string;
  business_account_id?: string;
};

export type voucherChangeBody = {
  status?: VOUCHER_STATUS;
  id: string;
};

export enum VOUCHER_STATUS {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  EXPIRED = 'EXPIRED',
}
