import { InputHTMLAttributes } from 'react';

import Base from '@/components/@base/@helpers/types';

export default interface Props extends Base, InputHTMLAttributes<HTMLInputElement> {
  min: number;
  max: number;
  step: number;
}
