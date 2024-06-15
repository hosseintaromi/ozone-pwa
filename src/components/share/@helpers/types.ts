import { ReactNode } from 'react';

export default interface Base {
  children?: ReactNode;
  className?: string;
}

export enum SIZE_ENUM {
  XXS = 'xxs',
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xlg',
}

export enum COLOR_ENUM {
  TEXT = 'text',
  INVERT = 'invert',
  SECONDARY = 'secondary',
  PRIMARY = 'primary',
  LIGHT_GRAY = 'light-gray',
  SUCCESS = 'success',
  ERROR = 'error',
  WARN = 'warn',
  PURPLE = 'purple',
  BLACK = 'black',
  WHITE = 'white',
}
