import Base, { SIZE_ENUM } from '@/components/@base/@helpers/types';

type Props = {
  id: string;
  title: string;
  open: boolean;
  onOpen: (open: boolean) => void;
  disable?: boolean;
  isLoading?: boolean;
  text?: string | number;
  size?: SIZE_ENUM;
} & Base;
export default Props;
