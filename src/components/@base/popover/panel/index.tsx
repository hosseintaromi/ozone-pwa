import { Popover } from '@headlessui/react';
import { forwardRef } from 'react';

import cn from '@/lib/clsxm';

import type Props from '@/components/@base/popover/panel/type';

function Panel({ children, className }: Props, ref) {
  return (
    <Popover.Panel
      ref={ref}
      className={cn('absolute left-1/2 z-10 -translate-x-1/2 transform', className)}
    >
      {children}
    </Popover.Panel>
  );
}

export default forwardRef(Panel);
