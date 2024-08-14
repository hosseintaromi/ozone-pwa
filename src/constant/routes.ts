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
  GET_WALLETS: '/account-wallets',
  GET_DONUT: '/transactions',
  GET_INVOICES: '/invoices',
  POST_LOGOUT: '/logout',
  POST_SET_PASSWORD: '/password/set',
  POST_Login_PASSWORD: '/login/password',
  POST_FORGET_INIT: '/password/init',
  GET_WALLET_TRANSACTIONS: (id: number, page: number) => `/account-wallets/${id}?page=${page}`,
  POST_CHARGE_WALLET: (id: number) => `/account-wallets/${id}/charge`,
  PATCH_WALLET_STATUS: (id: number) => `/account-wallets/${id}/status`,
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
  PurchaseDetail: '/purchase-detail/',
  AddWALLET: '/add-wallet',
};
