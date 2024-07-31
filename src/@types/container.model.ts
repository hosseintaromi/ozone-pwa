import { HTMLAttributes } from 'react';

import Base from './types';

export enum CONTAINER_TAG_TYPE {
  DIV = 'div',
  SECTION = 'section',
  MAIN = 'main',
  HEADER = 'header',
  FOOTER = 'footer',
}

export interface Props extends Base, HTMLAttributes<HTMLDivElement> {
  type?: CONTAINER_TAG_TYPE;
  center?: boolean;
}
