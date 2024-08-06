import { httpGetRequest, httpPostRequest } from '@/lib/baseHttpService';
import { APIUrlGenerator } from '@/lib/helper';

import { API_ROUTES } from '@/constant/routes';
import { BACKEND_SERVICE } from '@/models/_base.model';
import {
  loginInitTypeIn,
  loginInitTypeOut,
  loginOtpBodyType,
  loginOtpTypeOut,
} from '@/models/login.model';

export const postLoginInit = (data: loginInitTypeIn) =>
  httpPostRequest<loginInitTypeOut>(
    APIUrlGenerator(API_ROUTES.POST_LOGIN_INIT, BACKEND_SERVICE.AUTH),
    data,
  );

export const postLoginOtp = async (data: loginOtpBodyType) => {
  const res: { data: { data: loginOtpTypeOut } } = await httpPostRequest(
    APIUrlGenerator(API_ROUTES.POST_LOGIN_OTP, BACKEND_SERVICE.AUTH),
    data,
  );
  return res.data;
};
export const getInvoicesDetails = async (id: string) => {
  const res: { data: { data: loginOtpTypeOut } } = await httpGetRequest(
    APIUrlGenerator(API_ROUTES.GET_INVOICES_DETAIL(id), BACKEND_SERVICE.TRANSACTION),
  );
  return res.data;
};
