export type receiptResType = {
  bank_amount: number;
  bank_transaction_date: string;
  redirect_url: string;
  ref_number: string;
  status: 'SUCCESS' | 'FAIL';
};
