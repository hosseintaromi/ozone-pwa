import { useMutation, useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constant/query-key';

import { getPeople, postLoginInit, postLoginOtp } from '..';
import { loginInitTypeIn, loginOtpTypeIn } from '../types';

// export const usePostProfile = () => {
//   return useMutation({
//     mutationKey: [POST_PROFILE],
//     mutationFn: (body: ProfileUpdateType) => postProfile(body),
//   });
// };

export const useGetProfile = (id: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_SAMPLE_KEY],
    queryFn: () => getPeople(id),
  });
};

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
