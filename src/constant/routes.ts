export const API_GATE_WAY = process.env.NEXT_PUBLIC_API_URL;
export const SITE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
export const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;
export const PWA_HOST = 'pwa.app.com';
export const API_ROUTES = {
  POST_LOGIN_INIT: '/init',
  POST_LOGIN_OTP: '/login/otp',
  GET_INVOICES_DETAIL: (id: string) => `/invoices/detail/${id}`,
  POST_KYC: '/users/kyc',
  GET_USER_ME: '/users/me',
  POST_KYC_VERIFY: '/users/kyc/verify',
  POST_CHANGE_PASSWORD: '/password/reset',
  GET_ACCOUNT_WALLETS: '/wallets',
  GET_DONUT: '/transactions',
  GET_INVOICES: '/invoices',
  GET_INVOICES_WITH_PAGE: (page: number) => `/invoices?page=${page}`,
  POST_LOGOUT: '/logout',
  POST_SET_PASSWORD: '/password/set',
  POST_Login_PASSWORD: '/login/password',
  POST_FORGET_INIT: '/password/init',
  GET_WALLET_TRANSACTIONS: (id: number | null, page: number) => `/wallets/${id}?page=${page}`,
  POST_CHARGE_WALLET: (id: number) => `/wallets/${id}/charge`,
  PATCH_WALLET_STATUS: (id: number) => `/wallets/${id}/status`,
  POST_INQUIRY_WALLETS: '/wallets/inquiry',
  GET_WALLETS: '/wallet-types',
  POST_VERIFY_INQUIRY_WALLETS: '/wallets/verify',
  POST_ADD_WALLET: '/wallets',
  GET_QR_CODE: '/barcode',
  GET_VOUCHER_LIST: `/list`,
  POST_CHANGE_VOUCHER_STATUS: (id: string) => `/status/${id}`,
  GET_BUSINESSES: '/businesses',
  GET_RECEIPT: (token: string | null) => `/payments/${token}/result`,
};

export const ROUTES = {
  HOME: '/',
  ABOUT_US: '/about/',
  SCAN: '/scan/',
  VOUCHER: '/voucher/',
  SETTING: '/setting/',
  LOGIN: '/login/',
  WALLET: '/wallet/',
  KYC: '/kyc/',
  PURCHASE_DETAIL: '/purchase-detail/',
  ADD_WALLET: '/add-wallet',
  SET_PASSWORD: '/set-password',
};
