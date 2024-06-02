import { Popover } from '@headlessui/react';
import * as React from 'react';
import { forwardRef } from 'react';

import Props from '@/components/@base/popover/trigger/type';

function Trigger(props: Props, ref) {
  return <Popover.Button {...props} ref={ref} />;
}

export default forwardRef(Trigger);
