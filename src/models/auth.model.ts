export enum LOGIN_ROLES {
  CUSTOMER = 'CUSTOMER',
  BUSINESS = 'BUSINESS',
  BACKOFFICE = 'BACKOFFICE',
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

export interface loginOtpBodyType extends loginBaseType {
  code: string;
}

export interface loginOtpTypeOut {
  mobile?: string;
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

export interface setPasswordBody {
  password: string;
}

export interface loginPasswordBody {}
