import { HTMLAttributes } from 'react';

import Base, { COLOR_ENUM } from '@/components/@base/@helpers/types';

export default interface Props extends Base, HTMLAttributes<HTMLHeadingElement> {
  type: HEADING_TYPE;
  HeadingColor?: COLOR_ENUM.TEXT | COLOR_ENUM.INVERT;
}

export enum HEADING_TYPE {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
}
