import Base, { COLOR_ENUM } from '@/components/@base/@helpers/types';

type Props = {
  color?: COLOR_ENUM.PURPLE | COLOR_ENUM.PRIMARY | COLOR_ENUM.SECONDARY;
  text: string;
} & Base;

export default Props;
