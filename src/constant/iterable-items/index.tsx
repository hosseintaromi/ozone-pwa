import generator from '@/constant/iterable-items/generator';
import { SideBarMenuItemType, STEP_TYPE } from '@/constant/iterable-items/type';
import locale, { pageLevelLocale } from '@/locale';

import { ROUTES } from '../routes';

const {} = locale;

const {} = pageLevelLocale;

export const SIDEBAR_MENU_ITEMS = () =>
  generator<SideBarMenuItemType>([[locale.hello, ROUTES.HOME]], ['name', 'link', 'subMenu']);

export const STEP_TYPES = generator<{
  id: number;
  name: string;
  value: string;
}>(
  [
    ['1', locale.hello, STEP_TYPE.SUBMIT_INFO],
    ['2', locale.hello, STEP_TYPE.AUTHENTICATION],
  ],
  ['id', 'name', 'value', 'isActive'],
);
