import { AccountWalletType } from '@/models/digitalWallet.model';
import { invoiceDetail } from '@/models/transaction.model';
import React, { ReactNode } from 'react';

export type WalletTransactionCardType = {
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
};

export type PayInDialogType = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  walletId: number;
};

export interface ChooseWalletType extends PayInDialogType {
  data: AccountWalletType[] | undefined;
  activeWallet: AccountWalletType | undefined;
  setActiveWallet: React.Dispatch<React.SetStateAction<AccountWalletType | undefined>>;
}
export type PurchaseDetailType = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  data: invoiceDetail | undefined;
};

export type OfferPriceType = {
  children: ReactNode;
  isActive: boolean;
  setVal?: React.Dispatch<React.SetStateAction<number>>;
  value: number;
};
