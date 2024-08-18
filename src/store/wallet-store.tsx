import { create } from 'zustand';
import { AccountWalletType } from '@/models/digitalWallet.model';

interface WalletStore {
  selectedWallet: AccountWalletType | { id: null };
  forAddWallet: AccountWalletType | null;
  setSelectedWallet: (wallet: AccountWalletType) => void;
  setForAddWallet: (wallet: AccountWalletType) => void;
  addWalletId: number;
  setAddWalletId: (id: number) => void;
}

const useWalletStore = create<WalletStore>((set) => ({
  selectedWallet: { id: null },
  forAddWallet: null,
  setSelectedWallet: (wallet) => set({ selectedWallet: wallet }),
  setForAddWallet: (wallet) => set({ forAddWallet: wallet }),
  addWalletId: 0,
  setAddWalletId: (id: number) => set({ addWalletId: id }),
}));
export default useWalletStore;
