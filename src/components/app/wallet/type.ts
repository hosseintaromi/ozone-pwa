import { invoiceDetail } from '@/models/transaction.model';
import React, { ReactNode } from 'react';

export type HorizontalCardType = {
  title: string;
  date: string;
  amount: string;
  isPayIn: boolean;
};

export type PayInDialogType = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
};

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
