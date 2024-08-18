import { create } from 'zustand';

interface LoginStore {
  goToSetPassword: boolean;
  setGoToSetPassword: (val: boolean) => void;
}

const useLoginStore = create<LoginStore>((set) => ({
  goToSetPassword: false,
  setGoToSetPassword: (goToSetPassword) => set({ goToSetPassword }),
}));
export default useLoginStore;
