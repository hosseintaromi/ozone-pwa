import { RadioGroup } from '@headlessui/react';

import Props from '@/components/@base/input/radio/label/type';

export default function RadioLabel({ children, ...props }: Props) {
  return <RadioGroup.Label {...props}>{children}</RadioGroup.Label>;
}
