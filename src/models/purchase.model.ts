export type invoiceDetail = {
  data: {
    status: 'PENDING';
    order_id: string;
    business_account_id: number;
    customer_account_id: number;
    ref_number: string;
    amount: number;
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
  };
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
