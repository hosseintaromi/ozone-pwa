import { ReactNode } from 'react';

import { COLOR_ENUM, SIZE_ENUM } from '../types';

export enum TEXT_TYPE {
  SPAN = 'span',
  P = 'p',
}

export type TextType = {
  size?: SIZE_ENUM;
  type?: TEXT_TYPE;
  justify?: boolean;
  light?: boolean;
  semiBold?: boolean;
  medium?: boolean;
  bold?: boolean;
  inline?: boolean;
  center?: boolean;
  color?: COLOR_ENUM;
  children?: ReactNode;
  className?: string;
};
