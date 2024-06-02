import { InputHTMLAttributes, ReactNode } from 'react';
import { AllowedInputTypes } from 'react-otp-input';

import Base, { SIZE_ENUM } from '@/components/@base/@helpers/types';
import BaseProps from '@/components/@base/input/type';

export enum INPUT_TYPES {
  TEXT = 'text',
  NUMBER = 'number',
  EMAIL = 'email',
  PASSWORD = 'password',
  TEL = 'tel',
}

export enum INPUT_VARIANTS {
  SIMPLE = 'SIMPLE',
}

export default interface Props
  extends BaseProps,
    Base,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  type?: INPUT_TYPES | AllowedInputTypes;
  variant?: INPUT_VARIANTS;
  size?: SIZE_ENUM;
  errorMessage?: string;
  stickyText?: string;
  Icon?: (params: any) => ReactNode;
  LeftIcon?: (params: any) => ReactNode;
}
