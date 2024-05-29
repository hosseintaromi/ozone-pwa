export interface PersonModel {
  first_name: string;
  last_name: string;
}

export enum DEBT_TYPE_ENUM {
  INSURANCE_INSTALLMENT = 'INSURANCE_INSTALLMENT',
  POLICE_PENALTY = 'POLICE_PENALTY',
  INSURANCE_THIRD_PARTY = 'INSURANCE_THIRD_PARTY',
  FREEWAYS = 'FREEWAYS',
  ANNUAL_TOLL = 'ANNUAL_TOLL',
  ANNUAL_TOLL_GENERAL = 'ANNUAL_TOLL_GENERAL',
  TEHRAN = 'TEHRAN',
}

export interface StationModel {
  id: number;
  latitude: number;
  longitude: number;
  image: string;
  title: string;
  last_report_time: string;
  distance: string;
  rate: number;
  address: string;
  phone: null | string;
}
