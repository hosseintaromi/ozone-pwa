export enum LOGIN_ROLES {
  CUSTOMER = 'CUSTOMER',
  BUSINESS = 'BUSINESS',
  BACKOFFICE = 'BACKOFFICE',
}
export enum BACKEND_SERVICE {
  AUTH = 'auth',
}
interface loginBaseType {
  cellphone: string;
  clients: LOGIN_ROLES[];
}

export interface loginInitTypeIn extends loginBaseType {}

export interface loginInitTypeOut {
  is_registered: boolean;
  has_password: boolean;
}

export interface loginOtpTypeIn extends loginBaseType {
  code: string;
}

export interface loginOtpTypeOut {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}
