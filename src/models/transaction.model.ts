export type invoiceDetail = {
  status: 'PENDING';
  order_id: string;
  business_account_id: number;
  customer_account_id: number;
  ref_number: string;
  amount: number;
  business: {
    name: string;
    logo_base_url: string;
    logo_path: string;
  };
  items: [
    {
      name: string;
      amount: number;
      count: number;
    },
    {
      name: string;
      amount: number;
      count: number;
    },
  ];
  transactions: transactionsType[];
  account_wallet: accountWalletType[];
  logo: string;
  vouchers: [
    {
      name: string;
      amount: number;
    },
    {
      name: string;
      amount: number;
    },
  ];
  paid_amount: number;
  invoice_number: string;
  created_at: string;
};
type transactionsType = {
  id: number;
  amount: number;
  source_type: 'ACCOUNT_WALLET';
  source_id: number;
  destination_type: 'ACCOUNT_WALLET';
  destination_id: number;
  type: 'DEPOSIT';
  status: string;
  request_id: number;
  updated_at: string;
  deleted_at: string;
  request: {
    id: number;
    reason_type: string;
    reason_id: number;
    redirect_url: string;
    status: string;
    created_at: string;
    updated_at: string;
  };
  ref_number: string;
};

type accountWalletType = {
  id: number;
  amount: number;
  account_id: number;
  status: string;
  name: string;
  type: string;
  inquiry_available: boolean;
};

export type DonutChartParams = {
  account_wallet_id?: string | undefined | boolean;
  from_date?: string;
  to_date?: string;
};

export type DonutChartBody = {
  deposit: number;
  deposit_percentages: number;
  withdraw: number;
  withdraw_percentages: number;
};

export type invoicesListParams = {
  rom_date?: string;
  to_date?: string;
  business_id?: string;
  page: string;
};

export type invoicesListBody = {
  invoice: {
    id: number;
    status: 'SUCCESS';
    order_id: string;
    branch_code: string;
    type: 'ONLINE';
    business_account_id: number;
    customer_account_id: number;
    amount: number;
    mobile: string;
    items: [
      {
        name: string;
        amount: number;
        count: number;
      },
      {
        name: string;
        amount: number;
        count: number;
      },
    ];
    created_at: string;
    updated_at: null;
    ref_number: string;
  };
  business: {
    name: string;
    logo_base_url: string;
    logo_path: string;
  };
};
export type meta = {
  pagination: {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
  };
};

export enum DATE_SCOPE {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
}
