export type GeneratorReturnType<T> = { id: string } & T;

export type ServiceType = {
  flag: SERVICES_FLAG;
  name: string;
  link: string;
  icon: string;
  hasMore?: boolean;
  badge?: string | null;
};

export type SideBarMenuItemType = {
  name: string;
  link: string;
  subMenu?: SideBarMenuItemType;
};

export enum SERVICES_FLAG {
  STICKY = 'STICKY',
  ALL = 'all',
  DEBT = 'debt',
  INSURANCE = 'insurance',
  INQUIRY = 'inquiry',
  CARPARDAZ = 'carpardaz',
  SUPERGAS = 'supergas',
  MAINTENANCE = 'maintenance',
  OVERALL_INQUIRY = 'overall-inquiry',
  FREQUENT_USED_SERVICES = 'frequent-used-services',
}

export enum STEP_TYPE {
  SUBMIT_INFO = 'SUBMIT_INFO',
  AUTHENTICATION = 'AUTHENTICATION',
  VIEW = 'VIEW',
}
