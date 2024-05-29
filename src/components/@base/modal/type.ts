import {
  DialogPanelProps as BaseDialogPanelProps,
  DialogProps as BaseDialogProps,
} from '@headlessui/react/dist/components/dialog/dialog';
import { ElementType } from 'react';

import Base from '@/components/@base/@helpers/types';

type DialogProps<T extends ElementType = 'div'> = BaseDialogProps<T>;
type DialogPanelProps<T extends ElementType = 'div'> = BaseDialogPanelProps<T>;
export interface Props extends Base {
  onClose?: () => any;
  show?: boolean;
  noBackDrop?: boolean;
  center?: boolean;
  dialogProps?: DialogProps;
  dialogPanelProps?: DialogPanelProps;
  dialogPanelClassName?: string;
  panelWrapperClassName?: string;
}
export type { DialogPanelProps, DialogProps };
