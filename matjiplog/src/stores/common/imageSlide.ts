import { create } from "zustand";

export const imageSlideStore = create<imageSlideStoreTypes>((set) => ({
  slideIndex: 0,

  addSlideIndex: (number) => {
    set((state) => ({ slideIndex: state.slideIndex + number }));
  },
  initSlideIndex: () => {
    set({ slideIndex: 0 });
  },
}));

export interface imageSlideStoreTypes {
  slideIndex: number;
  addSlideIndex: (number: number) => void;
  initSlideIndex: () => void;
}
