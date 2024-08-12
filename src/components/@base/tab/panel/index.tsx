import { Tab as HeadlessUiTab } from '@headlessui/react';

import Props from '@/components/@base/tab/panel/type';

export default function Panel({ children }: Props) {
  return <HeadlessUiTab.Panel>{children}</HeadlessUiTab.Panel>;
}
