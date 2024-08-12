import { SIZE_ENUM } from 'ozone-uikit';
import Base from '@/@types/types';

type Props = {
  checked: boolean;
  size?: SIZE_ENUM;
  className?: string;
  justLabel?: boolean;
} & Base;

export default Props;
