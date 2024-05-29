import { SwitchProps } from '@headlessui/react/dist/components/switch/switch';

import { COLOR_ENUM } from '@/components/@base/@helpers/types';

type Props = SwitchProps<'div'> & {
  text?: string;
  color?: COLOR_ENUM;
};
export default Props;
