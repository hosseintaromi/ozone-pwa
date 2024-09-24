export interface kycBodyType {
  birth_date: string;
  national_code: string;
  token?: string;
}

export interface changePasswordBody {
  new_password: string;
  old_password: string;
}

export interface kycVerifyBodyType {
  token: string;
}

export interface kycVerify {
  mobile: string;
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

export interface userMe {
  id: number;
  mobile: string;
  account_id: number;
  national_code: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  national_code_kyc: boolean;
  birth_date_kyc: boolean;
}

export interface merchantList {
  id: number;
  account_id: number;
  name: string;
  legal_name: string;
  is_active: boolean;
  logo_base_url: string;
  logo_path: string;
}

export type selectedStore = merchantList & { logo?: JSX.Element };
