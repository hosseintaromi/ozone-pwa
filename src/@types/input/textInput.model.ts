import { InputHTMLAttributes } from 'react';

import BaseProps, { INPUT_TYPES } from '../input';
import Base, { SIZE_ENUM } from '../types';

export enum INPUT_VARIANTS {
  SIMPLE = 'SIMPLE',
}

export default interface TextInputType
  extends BaseProps,
    Base,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  type?: INPUT_TYPES;
  variant?: INPUT_VARIANTS;
  size?: SIZE_ENUM;
  errorMessage?: string;
  stickyText?: string;
  Icon?: (params: any) => JSX.Element;
  LeftIcon?: (params: any) => JSX.Element;
  LeftIconClass?: string;
  labelClassName?: string;
  background?: string;
  hint?: string;
}
