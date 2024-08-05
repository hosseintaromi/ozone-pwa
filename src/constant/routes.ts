export const API_GATE_WAY = process.env.NEXT_PUBLIC_API_URL;
export const SITE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
export const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;
export const PWA_HOST = 'pwa.app.com';
export const API_ROUTES = {
  GET_SERVICES: '/services',
  GET_USER: (id: number) => `/people/${id}`,
  ///////////////////////
  POST_LOGIN_INIT: '/init',
  POST_LOGIN_OTP: '/login/otp',
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
  PurchaseDetail: '/purchaseDetail/',
  AddWALLET: '/addWallet',
};
