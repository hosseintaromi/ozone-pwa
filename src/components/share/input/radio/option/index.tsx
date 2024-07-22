import { RadioGroup } from '@headlessui/react';
import type { ElementType } from 'react';

import Props from './type';

const DEFAULT_OPTION_TAG = 'div';
export default function RadioOption<TTag extends ElementType = typeof DEFAULT_OPTION_TAG>({
  children,
  value = '',
  ...props
}: Props<TTag>) {
  return (
    // @ts-ignore
    <RadioGroup.Option value={value} {...props}>
      {children}
    </RadioGroup.Option>
  );
}
