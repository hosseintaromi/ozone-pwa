import { ReactNode, TextareaHTMLAttributes } from 'react';
import { AllowedInputTypes } from 'react-otp-input';

import Base, { SIZE_ENUM } from '@/components/@base/@helpers/types';
import { INPUT_TYPES, INPUT_VARIANTS } from '@/components/@base/input/text/type';
import BaseProps from '@/components/@base/input/type';

type Props = {
  label?: string;
  type?: INPUT_TYPES | AllowedInputTypes;
  variant?: INPUT_VARIANTS;
  size?: SIZE_ENUM;
  errorMessage?: string;
  stickyText?: string;
  Icon?: (params: any) => ReactNode;
  LeftIcon?: (params: any) => ReactNode;
} & Base &
  BaseProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>;

export default Props;
