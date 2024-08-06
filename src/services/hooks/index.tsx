import { useMutation, useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constant/query-key';

import {
  getInvoicesDetails,
  getUserMe,
  postKyc,
  postKycVerify,
  postLoginInit,
  postLoginOtp,
} from '..';
import { loginInitTypeIn, loginOtpBodyType } from '@/models/auth.model';
import { kycBodyType } from '@/models/userManagement.model';

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
