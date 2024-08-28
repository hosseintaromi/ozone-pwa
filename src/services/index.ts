import { httpGetRequest, httpPatchRequest, httpPostRequest } from '@/lib/baseHttpService';
import { APIUrlGenerator } from '@/lib/helper';

import { API_ROUTES } from '@/constant/routes';
import { BACKEND_SERVICE } from '@/models/_base.model';
import {
  loginInitTypeIn,
  loginInitTypeOut,
  loginOtpBodyType,
  loginOtpTypeOut,
  loginPasswordBody,
  setPasswordBody,
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
  changePasswordBody,
  kycBodyType,
  kycVerify,
  kycVerifyBodyType,
  userMe,
} from '@/models/userManagement.model';
import {
  chargeWalletBody,
  ChargeWalletResponseType,
  AccountWalletType,
  walletStatusBody,
  WalletTransactionListReturnResult,
  WalletType,
  walletInquiryBody,
  walletInquiry,
  verifyWalletInquiryBody,
  qrBody,
  voucherType,
  voucherParams,
  voucherChangeBody,
} from '@/models/digitalWallet.model';

export const postLoginInit = async (data: loginInitTypeIn) => {
  const res: { data: { data: loginInitTypeOut } } = await httpPostRequest(
    APIUrlGenerator({ route: API_ROUTES.POST_LOGIN_INIT, service: BACKEND_SERVICE.AUTH }),
    data,
  );
  return res.data;
};

export const postLoginOtp = async (data: loginOtpBodyType) => {
  const res: { data: { data: loginOtpTypeOut } } = await httpPostRequest(
    APIUrlGenerator({ route: API_ROUTES.POST_LOGIN_OTP, service: BACKEND_SERVICE.AUTH }),
    data,
  );
  return res.data;
};

export const postLoginPassword = async (data: loginPasswordBody) => {
  const res: { data: { data: loginOtpTypeOut } } = await httpPostRequest(
    APIUrlGenerator({ route: API_ROUTES.POST_Login_PASSWORD, service: BACKEND_SERVICE.AUTH }),
    data,
  );
  return res.data;
};
export const getInvoicesDetails = async (id: string) => {
  const res: { data: { data: invoiceDetail } } = await httpGetRequest(
    APIUrlGenerator({
      route: API_ROUTES.GET_INVOICES_DETAIL(id),
      service: BACKEND_SERVICE.TRANSACTION,
    }),
  );
  return res.data.data;
};

export const postKyc = async (data: kycBodyType) => {
  const res: { data: { data: invoiceDetail } } = await httpPostRequest(
    APIUrlGenerator({ route: API_ROUTES.POST_KYC, service: BACKEND_SERVICE.USER_MANAGEMENT }),
    data,
  );
  return res.data;
};

export const postKycVerify = async (data: kycVerifyBodyType) => {
  const res: { data: { data: kycVerify } } = await httpPostRequest(
    APIUrlGenerator({
      route: API_ROUTES.POST_KYC_VERIFY,
      service: BACKEND_SERVICE.USER_MANAGEMENT,
    }),
    data,
  );
  return res.data;
};

export const postChangePassword = async (data: changePasswordBody) => {
  const res: { data: { data: kycVerify } } = await httpPostRequest(
    APIUrlGenerator({
      route: API_ROUTES.POST_CHANGE_PASSWORD,
      service: BACKEND_SERVICE.AUTH,
    }),
    data,
  );
  return res.data;
};

export const getUserMe = async () => {
  const res: { data: { data: userMe } } = await httpGetRequest(
    APIUrlGenerator({
      route: API_ROUTES.GET_USER_ME,
      service: BACKEND_SERVICE.USER_MANAGEMENT,
    }),
  );
  return res.data.data;
};

export const postInitPassword = async (data: any) => {
  const res: { data: any } = await httpPostRequest(
    APIUrlGenerator({
      route: API_ROUTES.POST_FORGET_INIT,
      service: BACKEND_SERVICE.AUTH,
    }),
    {
      mobile: data,
    },
  );
  return res.data;
};

export const getAccountWallets = async () => {
  const {
    data: { data },
  }: { data: { data: AccountWalletType[] } } = await httpGetRequest(
    APIUrlGenerator({
      route: API_ROUTES.GET_ACCOUNT_WALLETS,
      service: BACKEND_SERVICE.DIGITAL_WALLET,
    }),
  );
  return data;
};

export const getDonutChart = async (params: DonutChartParams) => {
  const res: { data: { data: DonutChartBody } } = await httpGetRequest(
    APIUrlGenerator({
      route: API_ROUTES.GET_DONUT,
      service: BACKEND_SERVICE.TRANSACTION,
      qry: params,
    }),
  );
  return res.data.data;
};

export const getInvoices = async (params: invoicesListParams) => {
  const res: { data: { data: invoicesListBody[]; meta: meta } } = await httpGetRequest(
    APIUrlGenerator({
      route: API_ROUTES.GET_INVOICES,
      service: BACKEND_SERVICE.TRANSACTION,
      qry: params,
    }),
  );
  return res.data.data;
};

export const postLogout = async () => {
  const res: { data: any } = await httpPostRequest(
    APIUrlGenerator({
      route: API_ROUTES.POST_LOGOUT,
      service: BACKEND_SERVICE.AUTH,
      scope: '',
    }),
    {},
  );
  return res.data;
};
export const postSetPassword = async (body: setPasswordBody) => {
  const data: { data: any } = await httpPostRequest(
    APIUrlGenerator({
      route: API_ROUTES.POST_SET_PASSWORD,
      service: BACKEND_SERVICE.AUTH,
    }),
    body,
  );
  return data;
};

export const getWalletTransactions = async (id: number | null, page: number) => {
  const {
    data: { data },
  }: { data: { data: WalletTransactionListReturnResult<AccountWalletType> } } =
    await httpGetRequest(
      APIUrlGenerator({
        route: API_ROUTES.GET_WALLET_TRANSACTIONS(id, page),
        service: BACKEND_SERVICE.DIGITAL_WALLET,
      }),
    );
  return {
    data: data.transactions,
    previousCursor: data.meta.pagination.current_page - 1,
    nextCursor:
      data.meta.pagination.current_page === data.meta.pagination.total_pages
        ? null
        : data.meta.pagination.current_page + 1,
  };
};

export const postChargeWallet = async (body: chargeWalletBody, id: number) => {
  const {
    data: { data },
  }: { data: { data: ChargeWalletResponseType } } = await httpPostRequest(
    APIUrlGenerator({
      route: API_ROUTES.POST_CHARGE_WALLET(id),
      service: BACKEND_SERVICE.DIGITAL_WALLET,
    }),
    body,
  );
  return data;
};

export const patchWalletStatus = async (body: walletStatusBody, id: number) => {
  const data = await httpPatchRequest(
    APIUrlGenerator({
      route: API_ROUTES.PATCH_WALLET_STATUS(id),
      service: BACKEND_SERVICE.DIGITAL_WALLET,
    }),
    body,
  );
  return data;
};

export const getWallets = async () => {
  const {
    data: { data },
  }: {
    data: {
      data: WalletType[];
    };
  } = await httpGetRequest(
    APIUrlGenerator({
      route: API_ROUTES.GET_WALLETS,
      service: BACKEND_SERVICE.DIGITAL_WALLET,
    }),
  );
  return data;
};

export const postWalletInquiry = async (body: walletInquiryBody) => {
  const {
    data: { data },
  }: { data: { data: walletInquiry } } = await httpPostRequest(
    APIUrlGenerator({
      route: API_ROUTES.POST_INQUIRY_WALLETS,
      service: BACKEND_SERVICE.DIGITAL_WALLET,
    }),
    body,
  );
  return data;
};

export const postVerifyWalletInquiry = async (body: verifyWalletInquiryBody) => {
  const {
    data: { data },
  }: { data: { data: any } } = await httpPostRequest(
    APIUrlGenerator({
      route: API_ROUTES.POST_VERIFY_INQUIRY_WALLETS,
      service: BACKEND_SERVICE.DIGITAL_WALLET,
    }),
    body,
  );
  return data;
};
export const postVerifyAddWallet = async (body: walletInquiryBody) => {
  const {
    data: { data },
  }: { data: { data: walletInquiry } } = await httpPostRequest(
    APIUrlGenerator({
      route: API_ROUTES.POST_ADD_WALLET,
      service: BACKEND_SERVICE.DIGITAL_WALLET,
    }),
    body,
  );
  return data;
};

export const getQrCode = async () => {
  const {
    data: { data },
  }: { data: { data: qrBody } } = await httpGetRequest(
    APIUrlGenerator({
      route: API_ROUTES.GET_QR_CODE,
      service: BACKEND_SERVICE.TRANSACTION,
    }),
  );
  return data;
};

export const getVouchers = async (params?: voucherParams) => {
  const {
    data: { data },
  }: { data: { data: voucherType[] } } = await httpGetRequest(
    APIUrlGenerator({
      route: API_ROUTES.GET_VOUCHER_LIST,
      service: BACKEND_SERVICE.VOUCHER,
      qry: params,
    }),
  );
  return data;
};
export const postChangeVoucherStatus = async (body: voucherChangeBody) => {
  const {
    data: { data },
  }: { data: { data: voucherType[] } } = await httpPatchRequest(
    APIUrlGenerator({
      route: API_ROUTES.POST_CHANGE_VOUCHER_STATUS(body.id),
      service: BACKEND_SERVICE.VOUCHER,
    }),
    { status: body.status },
  );
  return data;
};
