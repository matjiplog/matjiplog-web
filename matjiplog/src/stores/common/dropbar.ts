import { create } from "zustand";

export const dropbarStore = create<dropbarStoreTypes>((set) => ({
  dropBar: false,
  menu: "",

  toggleDropbar: () => {
    set((state) => ({ dropBar: !state.dropBar }));
  },

  updateMenu: (menuItem: string) => {
    set((state) => ({ menu: menuItem }));
  },

  initDropbar: () => {
    set((state) => ({ dropBar: false }));
  },
  initMenu: (initTitle: string) => {
    set((state) => ({ menu: initTitle }));
  },
}));

export interface dropbarStoreTypes {
  dropBar: boolean;
  menu: string;
  toggleDropbar: () => void;
  updateMenu: (menuItem: string) => void;
  initDropbar: () => void;
  initMenu: (initTitle: string) => void;
}
