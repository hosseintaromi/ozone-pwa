import { create } from 'zustand';
import { AccountWalletType } from '@/models/digitalWallet.model';

interface WalletStore {
  selectedWallet: AccountWalletType | { id: null };
  setSelectedWallet: (wallet: AccountWalletType) => void;
}

const useWalletStore = create<WalletStore>((set) => ({
  selectedWallet: { id: null },
  setSelectedWallet: (wallet) => set({ selectedWallet: wallet }),
}));
export default useWalletStore;
