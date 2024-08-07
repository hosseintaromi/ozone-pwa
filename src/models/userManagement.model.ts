export interface kycBodyType {
  birth_date: string;
  national_code: string;
}

export interface kycVerifyBodyType {
  token: string;
}

export interface kycVerify {
  mobile: string;
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
