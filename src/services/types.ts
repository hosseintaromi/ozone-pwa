import { CarData } from '@/models/car.model';

export type UserIdType = string;
export type MobilePhoneType = string;
export type CarIdType = CarData['id'];
export type LicenseType = string;
export type LoginType = {
  password: string;
  username: MobilePhoneType;
};
export type CarUpdateType = {
  id?: CarIdType;
  license: string;
  car_type_id?: string;
  kilometer?: string;
  build_year?: string;
  has_automatic_freeway_payment?: boolean;
  has_automatic_tehran_payment?: boolean;
  vin?: string;
  national_code?: string;
  body_status?: string;
  replaced_parts?: string;
  color?: string;
};

export type ProfileUpdateType = {
  email?: string;
  first_name?: string;
  iban?: string;
  last_name?: string;
  mobile?: string;
  national_code?: string;
  city_id?: string;
};

export type HasPageParam<Params> = Params & {
  page: number;
};
