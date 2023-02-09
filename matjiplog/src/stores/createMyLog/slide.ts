import { create } from "zustand";

export const slidesSelectIndexStore = create<slidesSelectTypes>((set) => ({
  slideSelectIndex: 0,

  addSlideIndex: (number) => {
    set((state) => ({ slideSelectIndex: state.slideSelectIndex + number }));
  },

  initSlideIndex: () => {
    set({ slideSelectIndex: 0 });
  },
}));

export interface slidesSelectTypes {
  slideSelectIndex: number;
  addSlideIndex: (number: number) => void;
  initSlideIndex: () => void;
}
