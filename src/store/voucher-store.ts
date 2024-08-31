import { create } from 'zustand';
import { voucherType } from '@/models/digitalWallet.model';

interface VoucherStore {
  selectedVoucher: voucherType | { id: null };
  setSelectedVoucher: (wallet: voucherType) => void;
}

const useVoucherStore = create<VoucherStore>((set) => ({
  selectedVoucher: { id: null },
  setSelectedVoucher: (voucher) => set({ selectedVoucher: voucher }),
}));
export default useVoucherStore;
