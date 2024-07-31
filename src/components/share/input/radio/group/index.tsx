import { RadioGroup as HeadlessUiRadioGroup } from '@headlessui/react';
import type { ElementType } from 'react';

import Props from '../type';

const DEFAULT_GROUP_TAG = 'div';

export default function RadioGroup<TTag extends ElementType = typeof DEFAULT_GROUP_TAG>({
  children,
  ...props
}: Props<TTag>) {
  // @ts-ignore
  return <HeadlessUiRadioGroup {...props}>{children}</HeadlessUiRadioGroup>;
}
