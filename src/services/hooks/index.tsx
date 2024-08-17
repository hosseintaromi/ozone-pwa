import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constant/query-key';

import {
  getDonutChart,
  getInvoices,
  getInvoicesDetails,
  getUserMe,
  getWallets,
  getWalletTransactions,
  patchWalletStatus,
  postChargeWallet,
  postKyc,
  postKycVerify,
  postLoginInit,
  postLoginOtp,
  postLoginPassword,
  postLogout,
  postSetPassword,
} from '..';
import {
  loginInitTypeIn,
  loginOtpBodyType,
  loginPasswordBody,
  setPasswordBody,
} from '@/models/auth.model';
import { kycBodyType } from '@/models/userManagement.model';
import { DonutChartParams, invoicesListParams } from '@/models/transaction.model';
import { chargeWalletBody, walletStatusBody } from '@/models/digitalWallet.model';

export const useLoginInit = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_LOGIN_INIT],
    mutationFn: (data: loginInitTypeIn) => postLoginInit(data),
  });
};

export const useLoginOtp = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_LOGIN_OTP],
    mutationFn: (data: loginOtpBodyType) => postLoginOtp(data),
  });
};

export const useLoginPassword = () => {
  return useMutation({
    mutationFn: (data: loginPasswordBody) => postLoginPassword(data),
  });
};

export const usePurchaseDetail = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_INVOICES_DETAILS],
    queryFn: () => getInvoicesDetails(id),
  });
};

export const useKyc = () => {
  return useMutation({
    mutationFn: (data: kycBodyType) => postKyc(data),
  });
};

export const usePostKycVerify = () => {
  return useMutation({
    mutationFn: postKycVerify,
  });
};
export const useGetUser = (token: string | null) => {
  return useQuery({
    queryFn: getUserMe,
    queryKey: [QUERY_KEYS.GET_USER_ME],
    enabled: !!token,
  });
};

export const useGetWallet = () => {
  return useQuery({
    queryFn: getWallets,
    queryKey: [QUERY_KEYS.GET_WALLETS],
  });
};

export const useGetInvoices = () => {
  return useMutation({
    mutationFn: (data: invoicesListParams) => getInvoices(data),
    mutationKey: [QUERY_KEYS.GET_WALLETS],
  });
};

export const useGetDonut = () => {
  return useMutation({
    mutationFn: (data: DonutChartParams) => getDonutChart(data),
    mutationKey: [QUERY_KEYS.GET_INVOICES],
  });
};

export const usePostLogout = (data: any) => {
  return useMutation({
    mutationFn: () => postLogout(),
  });
};

export const usePostSetPassword = () => {
  return useMutation({
    mutationFn: (data: setPasswordBody) => postSetPassword(data),
  });
};

export const useGetWalletTransactions = (id: number | null) => {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => getWalletTransactions(id, pageParam),
    queryKey: [QUERY_KEYS.GET_WALLET_TRANSACTIONS, id],
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    getPreviousPageParam: (firstPage) => firstPage.previousCursor,
    gcTime: 0,
    enabled: !!id,
  });
};

export const usePostChargeWallet = (id: number) => {
  return useMutation({
    mutationFn: (body: chargeWalletBody) => postChargeWallet(body, id),
    mutationKey: [QUERY_KEYS.POST_CHARGE_WALLET],
  });
};

export const usePatchWalletStatus = (id: number) => {
  return useMutation({
    mutationFn: (body: walletStatusBody) => patchWalletStatus(body, id),
    mutationKey: [QUERY_KEYS.PATH_WALLET_STATUS],
  });
};
