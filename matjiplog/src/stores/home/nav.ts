import { create } from "zustand";

export const navStore = create<navTypes>((set) => ({
  nav: false,

  toggleNav: () => {
    set((state) => ({ nav: !state.nav }));
  },

  initNav: () => {
    set((state) => ({ nav: false }));
  },
}));

export interface navTypes {
  nav: boolean;
  toggleNav: () => void;
  initNav: () => void;
}
