import { create } from 'zustand';

import { DialogPanelProps, DialogProps } from '../components/share/modal/type';

interface OptionsType {
  Head?: (() => JSX.Element) | null;
  Body?: () => JSX.Element;
  Action?: (() => JSX.Element) | null;
  DialogProps?: DialogProps | null;
  DialogPanelProps?: DialogPanelProps | null;
  onDemandClose?: boolean;
  noBackDrop?: boolean;
  darkBackDrop?: boolean;
  center?: boolean;
}

interface CommonModalState {
  show: boolean;
  Head: (() => JSX.Element) | null;
  Body: () => JSX.Element;
  Action: (() => JSX.Element) | null;
  DialogProps?: DialogProps | null;
  DialogPanelProps?: DialogPanelProps | null;
  onDemandClose?: boolean;
  noBackDrop?: boolean;
  darkBackDrop?: boolean;
  center?: boolean;
  setDialogProps: (DialogProps: DialogProps) => void;
  setDialogPanelProps: (DialogPanelProps: DialogPanelProps) => void;
  setShow: (showing: boolean, options?: OptionsType) => void;
  setHead: (Head: JSX.Element) => void;
  setBody: (Body: JSX.Element) => void;
  setAction: (Action: JSX.Element) => void;
}

const useCommonModalStore = create<CommonModalState>((set) => ({
  show: false,
  Body: () => <></>,
  Action: null,
  Head: null,
  DialogProps: null,
  DialogPanelProps: null,
  onDemandClose: false,
  darkBackDrop: false,
  center: false,
  setDialogProps: (DialogProps) => {
    set({ DialogProps });
  },
  setDialogPanelProps: (DialogPanelProps) => {
    set({ DialogPanelProps });
  },
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
      darkBackDrop = false,
      center = false,
    } = {
      Head: null,
      Body: () => <></>,
      Action: null,
      DialogProps: null,
      DialogPanelProps: null,
      onDemandClose: false,
      darkBackDrop: false,
      noBackDrop: false,
      center: false,
    },
  ) => {
    set({
      show,
      Body,
      Action,
      Head,
      DialogProps,
      DialogPanelProps,
      onDemandClose,
      darkBackDrop,
      noBackDrop,
      center,
    });
  },
  setHead: (Head) => {
    set({ Head: () => Head });
  },
  setBody: (Body) => {
    set({ Body: () => Body });
  },
  setAction: (Action) => {
    set({ Action: () => Action });
  },
}));
export default useCommonModalStore;
