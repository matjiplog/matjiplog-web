import { create } from "zustand";

export const searchDropbarStore = create<searchDropbarTypes>((set) => ({
  dropBar: false,
  menu: "전체",

  toggleDropbar: () => {
    set((state) => ({ dropBar: !state.dropBar }));
  },

  initDropbar: () => {
    set((state) => ({ dropBar: false }));
  },
}));

export interface searchDropbarTypes {
  dropBar: boolean;
  menu: string;
  toggleDropbar: () => void;
  initDropbar: () => void;
}
