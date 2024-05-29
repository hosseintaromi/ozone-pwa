import { RadioGroup } from '@headlessui/react';
import type { ElementType } from 'react';

import Props from '@/components/@base/input/radio/option/type';

const DEFAULT_OPTION_TAG = 'div';
export default function RadioOption<TTag extends ElementType = typeof DEFAULT_OPTION_TAG>({
  children,
  value = '',
  ...props
}: Props<TTag>) {
  return (
    <RadioGroup.Option value={value} {...props}>
      {children}
    </RadioGroup.Option>
  );
}
