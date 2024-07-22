import { RadioGroup } from '@headlessui/react';

import Props from '../../../../@types/types';

export default function RadioLabel({ children, ...props }: Props) {
  return <RadioGroup.Label {...props}>{children}</RadioGroup.Label>;
}
