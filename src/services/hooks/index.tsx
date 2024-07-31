import { useMutation } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constant/query-key';

import { postLoginInit, postLoginOtp } from '..';
import { loginInitTypeIn, loginOtpTypeIn } from '../types';

export const useLoginInit = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_LOGIN_INIT],
    mutationFn: (data: loginInitTypeIn) => postLoginInit(data),
  });
};

export const useLoginOtp = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_LOGIN_OTP],
    mutationFn: (data: loginOtpTypeIn) => postLoginOtp(data),
  });
};
