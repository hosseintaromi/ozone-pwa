import { ReactNode } from 'react';
import { create } from 'zustand';

import { DialogPanelProps, DialogProps } from '@/components/@base/modal/type';

interface OptionsType {
  Head?: (() => ReactNode) | null;
  Body?: () => ReactNode;
  Action?: (() => ReactNode) | null;
  DialogProps?: DialogProps | null;
  DialogPanelProps?: DialogPanelProps | null;
  onDemandClose?: boolean;
  noBackDrop?: boolean;
  center?: boolean;
}

interface CommonModalState {
  show: boolean;
  Head: (() => ReactNode) | null;
  Body: () => ReactNode;
  Action: (() => ReactNode) | null;
  DialogProps?: DialogProps | null;
  DialogPanelProps?: DialogPanelProps | null;
  onDemandClose?: boolean;
  noBackDrop?: boolean;
  center?: boolean;
  setDialogProps: (DialogProps: DialogProps) => void;
  setDialogPanelProps: (DialogPanelProps: DialogPanelProps) => void;
  setShow: (showing: boolean, options?: OptionsType) => void;
  setHead: (Head: ReactNode) => void;
  setBody: (Body: ReactNode) => void;
  setAction: (Action: ReactNode) => void;
}

const useCommonModalStore = create<CommonModalState>((set) => ({
  show: false,
  Body: () => <></>,
  Action: null,
  Head: null,
  DialogProps: null,
  DialogPanelProps: null,
  onDemandClose: false,
  center: false,
  setDialogProps: (DialogProps) => set({ DialogProps }),
  setDialogPanelProps: (DialogPanelProps) => set({ DialogPanelProps }),
  setShow: (
    show,
    {
      Head = null,
      Body = () => <></>,
      Action = null,
      DialogProps = null,
      DialogPanelProps = null,
      onDemandClose = false,
      noBackDrop = false,
      center = false,
    } = {
      Head: null,
      Body: () => <></>,
      Action: null,
      DialogProps: null,
      DialogPanelProps: null,
      onDemandClose: false,
      noBackDrop: false,
      center: false,
    },
  ) =>
    set({
      show,
      Body,
      Action,
      Head,
      DialogProps,
      DialogPanelProps,
      onDemandClose,
      noBackDrop,
      center,
    }),
  setHead: (Head) => set({ Head: () => Head }),
  setBody: (Body) => set({ Body: () => Body }),
  setAction: (Action) => set({ Action: () => Action }),
}));
export default useCommonModalStore;
