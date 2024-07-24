import { Tab as HeadlessUiTab } from '@headlessui/react';

import Props from './type';

export default function Panel({ children }: Props) {
  return <HeadlessUiTab.Panel>{children}</HeadlessUiTab.Panel>;
}
