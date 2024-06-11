import { create } from 'zustand';

interface UserStore {
  user: null;
  token: null;
  clear: () => void;
  // FIXME: any type
  setUser: (user: any) => void;
  setToken: (token: any) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  token: null,
  clear: () => set({ user: null, token: null }),
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
}));
export default useUserStore;
