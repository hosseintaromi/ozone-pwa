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

export type OfferPriceType = {
  children: ReactNode;
  isActive: boolean;
  setVal?: React.Dispatch<React.SetStateAction<number>>;
  value: number;
};
