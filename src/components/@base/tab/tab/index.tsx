import { Tab as HeadlessUiTab } from '@headlessui/react';
import type { ElementType } from 'react';

import Props from '@/components/@base/tab/tab/type';
const DEFAULT_TAB_TAG = 'button';
export default function Tab<TTag extends ElementType = typeof DEFAULT_TAB_TAG>({
  children,
  ...props
}: Props<TTag>) {
  return <HeadlessUiTab {...props}>{children}</HeadlessUiTab>;
}
