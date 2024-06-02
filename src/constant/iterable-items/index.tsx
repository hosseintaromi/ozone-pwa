import { IconType } from 'react-icons';
import { BsPerson } from 'react-icons/bs';
import { CiCreditCard1, CiLocationOn } from 'react-icons/ci';
import { FaLinkedin, FaRegAddressCard, FaTwitter } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiInstagramFill, RiWheelchairLine } from 'react-icons/ri';

import { makePWARoute } from '@/lib/helper';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import { INPUT_TYPES } from '@/components/@base/input/text/type';
import { TIME_FILTER_TYPE } from '@/components/app/car/components/[id]/[report]/filters/modal/type';

import generator from '@/constant/iterable-items/generator';
import {
  SERVICES_FLAG,
  ServiceType,
  SideBarMenuItemType,
  STEP_TYPE,
} from '@/constant/iterable-items/type';
import localization, { pageLevelLocalization } from '@/constant/localization';
import {
  ABOUT_US,
  BLOG,
  CONTACT,
  INSTAGRAM,
  LINKEDIN,
  TWITTER,
} from '@/constant/routes';
import { FUEL_SUB_SERVICE } from '@/models/fuel-report.model';
import InvoiceModel from '@/models/invoice.model';
import { SWAP_SERVICE_TYPE } from '@/models/report.model';

const {
} = localization;

const {
} = pageLevelLocalization;

export const SIDEBAR_MENU_ITEMS = () =>
  generator<SideBarMenuItemType>(
    [
      [localization.aboutUs, ABOUT_US],
      [localization.contactUs, CONTACT],
      [localization.aboutUs, ABOUT_US],
      [localization.news, BLOG],
    ],
    ['name', 'link', 'subMenu'],
  );


export const SOCIALS = generator<{
  Icon: IconType;
  link: string;
}>(
  [
    [RiInstagramFill, INSTAGRAM],
    [FaTwitter, TWITTER],
    [FaLinkedin, LINKEDIN],
  ],
  ['Icon', 'link'],
);



export const STEP_TYPES = generator<{
  id: number;
  name: string;
  value: string;
}>(
  [
    ['1', localization.submitInfo, STEP_TYPE.SUBMIT_INFO],
    ['2', localization.authentication, STEP_TYPE.AUTHENTICATION],
    ['3', localization.view, STEP_TYPE.VIEW],
  ],
  ['id', 'name', 'value', 'isActive'],
);
