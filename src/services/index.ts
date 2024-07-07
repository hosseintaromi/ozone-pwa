import { httpGetRequest, httpPostRequest } from '@/lib/baseHttpService';
import { APIUrlGenerator } from '@/lib/helper';

import { API_ROUTES } from '@/constant/routes';

import {
  BACKEND_SERVICE,
  loginInitTypeIn,
  loginInitTypeOut,
  loginOtpTypeIn,
  loginOtpTypeOut,
} from './types';

// export const postProfile = async (body: any): Promise<UserModel> => {
//   const { data }: { data: UserModel } = await axios.post(
//     APIUrlGenerator(API_ROUTES.GET_SERVICES),
//     { ...AUTH, ...body },
//   );
//   return data;
// };

// export const getPeople = async (id: number): Promise<UserModel> => {
//   const { data }: { data: UserModel } = await axios.get(
//     APIUrlGenerator(API_ROUTES.GET_USER(id)),
//   );
//   return data;
// };

// export const postProductPurchase = (data: postProductPurchaseIn) =>
//   httpPostRequest<postProductPurchaseOut>(`product/${data.id}`, data).then(
//     (res) => res
//   );

export const getPeople = (id: number) =>
  httpGetRequest<any>(APIUrlGenerator(API_ROUTES.GET_USER(id))).then((res) => res.data);

export const postLoginInit = (data: loginInitTypeIn) =>
  httpPostRequest<loginInitTypeOut>(
    APIUrlGenerator(API_ROUTES.POST_LOGIN_INIT, BACKEND_SERVICE.AUTH),
    data,
  ).then((res) => res.data);

export const postLoginOtp = (data: loginOtpTypeIn) =>
  httpPostRequest<loginOtpTypeOut>(
    APIUrlGenerator(API_ROUTES.POST_LOGIN_OTP, BACKEND_SERVICE.AUTH),
    data,
  ).then((res) => res.data);
