import { ReactNode } from 'react';
import { create } from 'zustand';

interface OptionsType {
  Head?: (() => ReactNode) | null;
  Body?: () => ReactNode;
  Action?: (() => ReactNode) | null;
  onDemandClose?: boolean;
  noBackDrop?: boolean;
  center?: boolean;
}

interface CommonModalState {
  show: boolean;
  Head: (() => ReactNode) | null;
  Body: () => ReactNode;
  Action: (() => ReactNode) | null;
  onDemandClose?: boolean;
  noBackDrop?: boolean;
  center?: boolean;
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
  setShow: (
    show,
    {
      Head = null,
      Body = () => <></>,
      Action = null,
      onDemandClose = false,
      noBackDrop = false,
      center = false,
    } = {
      Head: null,
      Body: () => <></>,
      Action: null,
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
      onDemandClose,
      noBackDrop,
      center,
    }),
  setHead: (Head) => set({ Head: () => Head }),
  setBody: (Body) => set({ Body: () => Body }),
  setAction: (Action) => set({ Action: () => Action }),
}));
export default useCommonModalStore;
