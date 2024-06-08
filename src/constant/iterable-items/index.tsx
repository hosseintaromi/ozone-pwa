import generator from '@/constant/iterable-items/generator';
import { SideBarMenuItemType, STEP_TYPE } from '@/constant/iterable-items/type';
import localization, { pageLevelLocalization } from '@/constant/localization';
import { ROUTES } from '../routes';

const {} = localization;

const {} = pageLevelLocalization;

export const SIDEBAR_MENU_ITEMS = () =>
  generator<SideBarMenuItemType>(
    [[localization.hello, ROUTES.HOME]],
    ['name', 'link', 'subMenu'],
  );

export const STEP_TYPES = generator<{
  id: number;
  name: string;
  value: string;
}>(
  [
    ['1', localization.hello, STEP_TYPE.SUBMIT_INFO],
    ['2', localization.hello, STEP_TYPE.AUTHENTICATION],
  ],
  ['id', 'name', 'value', 'isActive'],
);
