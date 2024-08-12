import { create } from 'zustand';
import { DialogPanelProps, DialogProps } from '@/components/@base/modal/type';

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
  dialogPanelClassName?: string;
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
  dialogPanelClassName?: string;
}

const useCommonModalStore = create<CommonModalState>((set, get) => ({
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
      dialogPanelClassName = '',
    } = {
      Head: get().Head,
      Body: get().Body,
      Action: null,
      DialogProps: null,
      DialogPanelProps: null,
      onDemandClose: false,
      darkBackDrop: false,
      noBackDrop: false,
      center: get().center,
      dialogPanelClassName: '',
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
      dialogPanelClassName,
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
