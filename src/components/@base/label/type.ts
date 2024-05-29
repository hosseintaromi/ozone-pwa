import { LabelHTMLAttributes } from 'react';

import Base from '@/components/@base/@helpers/types';

export interface Props extends Base, LabelHTMLAttributes<HTMLLabelElement> {
  id?: string;
}
