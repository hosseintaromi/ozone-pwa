import { RefAttributes } from 'react';
import { ToastContainerProps } from 'react-toastify/dist/types';

export interface Props extends ToastContainerProps, RefAttributes<HTMLDivElement> {
  id?: string;
}
