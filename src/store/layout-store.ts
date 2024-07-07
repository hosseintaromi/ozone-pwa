// import { create } from 'zustand';

// type PageName = 'main' | 'wallet' | 'setting';
// export enum PAGES_NAME {
//   HOME = 'home',
//   WALLET = 'wallet',
//   COUPON = 'coupon',
//   SCAN = 'scan',
//   SETTING = 'setting',
// }
// type LayoutType = {
//   activePage: PAGES_NAME;
//   setActivePage: (page: PAGES_NAME) => void;
// };

// export const useLayoutStore = create<LayoutType>((set) => ({
//   activePage: PAGES_NAME.HOME,
//   setActivePage: (page) => {
//     set({ activePage: page });
//   },
//   // decrement: () => {
//   //   set((state) => ({ count: state.count - 1 }));
//   // },
// }));
