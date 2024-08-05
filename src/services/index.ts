import { httpPostRequest } from '@/lib/baseHttpService';
import { APIUrlGenerator } from '@/lib/helper';

import { API_ROUTES } from '@/constant/routes';

import {
  BACKEND_SERVICE,
  loginInitTypeIn,
  loginInitTypeOut,
  loginOtpTypeIn,
  loginOtpTypeOut,
} from './types';

export const postLoginInit = (data: loginInitTypeIn) =>
  httpPostRequest<loginInitTypeOut>(
    APIUrlGenerator(API_ROUTES.POST_LOGIN_INIT, BACKEND_SERVICE.AUTH),
    data,
  );

export const postLoginOtp = async (data: loginOtpTypeIn) => {
  const res: { data: { data: loginOtpTypeOut } } = await httpPostRequest(
    APIUrlGenerator(API_ROUTES.POST_LOGIN_OTP, BACKEND_SERVICE.AUTH),
    data,
  );
  return res.data;
};
