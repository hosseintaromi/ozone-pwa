import { create } from 'zustand';

import TokenModel from '@/models/token.model';
import UserModel from '@/models/user.model';

interface UserStore {
  user: UserModel | null;
  token: TokenModel | null;
  clear: () => void;
  setUser: (user: UserModel) => void;
  setToken: (token: TokenModel) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  token: null,
  clear: () => set({ user: null, token: null }),
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
}));
export default useUserStore;
