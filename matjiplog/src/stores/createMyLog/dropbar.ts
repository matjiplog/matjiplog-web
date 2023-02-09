import { create } from "zustand";

export const createMyLogdropbarStore = create<createMyLogdropbarTypes>(
  (set) => ({
    dropBar: false,
    menu: "선택 사항",

    toggleDropbar: () => {
      set((state) => ({ dropBar: !state.dropBar }));
    },

    initDropbar: () => {
      set((state) => ({ dropBar: false }));
    },
  })
);

export interface createMyLogdropbarTypes {
  dropBar: boolean;
  menu: string;
  toggleDropbar: () => void;
  initDropbar: () => void;
}
