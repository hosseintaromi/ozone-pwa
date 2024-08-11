import { type ElementType } from 'react';
import {
  type DialogPanelProps as BaseDialogPanelProps,
  type DialogProps as BaseDialogProps,
} from '@headlessui/react/dist/components/dialog/dialog';
import type Base from '@/components/@base/@helpers/types';

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
  darkBackDrop?: boolean;
  roundHead?: boolean;
}

export type { DialogPanelProps, DialogProps };
