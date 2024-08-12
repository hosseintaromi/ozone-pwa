import { httpGetRequest, httpPostRequest } from '@/lib/baseHttpService';
import { APIUrlGenerator } from '@/lib/helper';

import { API_ROUTES } from '@/constant/routes';
import { BACKEND_SERVICE } from '@/models/_base.model';
import {
  loginInitTypeIn,
  loginInitTypeOut,
  loginOtpBodyType,
  loginOtpTypeOut,
} from '@/models/auth.model';
import {
  DonutChartBody,
  DonutChartParams,
  invoiceDetail,
  invoicesListBody,
  invoicesListParams,
  meta,
} from '@/models/transaction.model';
import {
  kycBodyType,
  kycVerify,
  kycVerifyBodyType,
  userMe,
} from '@/models/userManagement.model';
import { Wallets, WalletTransactionListReturnResult } from '@/models/digitalWallet.model';

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
  const res: { data: { data: invoiceDetail } } = await httpGetRequest(
    APIUrlGenerator(API_ROUTES.GET_INVOICES_DETAIL(id), BACKEND_SERVICE.TRANSACTION),
  );
  return res.data.data;
};

export const postKyc = async (data: kycBodyType) => {
  const res: { data: { data: invoiceDetail } } = await httpPostRequest(
    APIUrlGenerator(API_ROUTES.POST_KYC, BACKEND_SERVICE.USER_MANAGEMENT),
    data,
  );
  return res.data;
};

export const postKycVerify = async (data: kycVerifyBodyType) => {
  const res: { data: { data: kycVerify } } = await httpPostRequest(
    APIUrlGenerator(API_ROUTES.POST_KYC_VERIFY, BACKEND_SERVICE.USER_MANAGEMENT),
    data,
  );
  return res.data;
};

export const getUserMe = async () => {
  const res: { data: { data: userMe } } = await httpGetRequest(
    APIUrlGenerator(API_ROUTES.GET_USER_ME, BACKEND_SERVICE.USER_MANAGEMENT),
  );
  return res.data.data;
};

export const getWallets = async () => {
  const {
    data: { data },
  }: { data: { data: Wallets[] } } = await httpGetRequest(
    APIUrlGenerator(API_ROUTES.GET_WALLETS, BACKEND_SERVICE.DIGITAL_WALLET),
  );
  return data;
};

export const getDonutChart = async (params: DonutChartParams) => {
  const res: { data: { data: DonutChartBody } } = await httpGetRequest(
    APIUrlGenerator(API_ROUTES.GET_DONUT, BACKEND_SERVICE.TRANSACTION, params),
  );
  return res.data.data;
};

export const getInvoices = async (params: invoicesListParams) => {
  const res: { data: { data: invoicesListBody[]; meta: meta } } = await httpGetRequest(
    APIUrlGenerator(API_ROUTES.GET_INVOICES, BACKEND_SERVICE.TRANSACTION, params),
  );
  return res.data.data;
};
export const getWalletTransactions = async (id: number, page: number) => {
  const {
    data: { data },
  }: { data: { data: WalletTransactionListReturnResult<Wallets> } } = await httpGetRequest(
    APIUrlGenerator(
      API_ROUTES.GET_WALLET_TRANSACTIONS(id, page),
      // BACKEND_SERVICE.DIGITAL_WALLET,
    ),
  );
  return {
    data: data.data,
    previousCursor: data.meta.pagination.current_page - 1,
    nextCursor:
      data.meta.pagination.current_page === data.meta.pagination.last_page
        ? null
        : data.meta.pagination.current_page + 1,
  };
};
