import { create } from 'zustand';

interface LoginStore {
  isForget: boolean;
  setIsForget: (val: boolean) => void;
}

const useLoginStore = create<LoginStore>((set) => ({
  isForget: false,
  setIsForget: (isForget) => set({ isForget }),
}));
export default useLoginStore;
