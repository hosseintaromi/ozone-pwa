import { ReactNode, TextareaHTMLAttributes } from 'react';
import { AllowedInputTypes } from 'react-otp-input';

import { INPUT_VARIANTS } from './textInput.model';
import BaseProps, { INPUT_TYPES } from '../input';
import Base, { SIZE_ENUM } from '../types';

type TextAreaType = {
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

export default TextAreaType;
