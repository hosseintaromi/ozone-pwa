import { create } from 'zustand';
import { voucherType } from '@/models/digitalWallet.model';
import { selectedStore } from '@/models/userManagement.model';

interface VoucherStore {
  selectedVoucher: voucherType | { id: null };
  setSelectedVoucher: (wallet: voucherType) => void;
  filter: {
    selectedStore: selectedStore | { account_id: null };
    status: 'active' | 'inactive' | 'all';
    type: 'PROMOTION' | 'PURCHASABLE' | null;
  };
  setFilter: (filter) => void;
  resetFilter: () => void;
}

const useVoucherStore = create<VoucherStore>((set) => ({
  selectedVoucher: { id: null },
  setSelectedVoucher: (voucher) => set({ selectedVoucher: voucher }),
  filter: {
    selectedStore: { account_id: null },
    status: 'all',
    type: null,
  },
  setFilter: (filter) =>
    set({
      filter: {
        selectedStore: filter.selectedStore,
        status: filter.status,
        type: filter.type,
      },
    }),
  resetFilter: () =>
    set({
      filter: {
        selectedStore: { account_id: null },
        status: 'all',
        type: null,
      },
    }),
}));
export default useVoucherStore;
