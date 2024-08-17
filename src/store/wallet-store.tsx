import { create } from 'zustand';
import { WalletType } from '@/models/digitalWallet.model';

interface WalletStore {
  selectedWallet: WalletType | { id: null };
  setSelectedWallet: (wallet: WalletType) => void;
}

const useWalletStore = create<WalletStore>((set) => ({
  selectedWallet: { id: null },
  setSelectedWallet: (wallet) => set({ selectedWallet: wallet }),
}));
export default useWalletStore;
