import Base, { COLOR_ENUM } from './types';

export enum HEADING_TYPE {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
}

export interface HeadingType extends Base {
  type: HEADING_TYPE;
  HeadingColor?: COLOR_ENUM.TEXT | COLOR_ENUM.INVERT;
  color: any;
}
