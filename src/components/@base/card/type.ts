import Base from '@/components/@base/@helpers/types';
import { Props as ContainerProps } from '@/components/@base/container/type';

export interface Props extends Base, ContainerProps {
  noShadow?: boolean;
  noBorder?: boolean;
  ref?: any;
}
