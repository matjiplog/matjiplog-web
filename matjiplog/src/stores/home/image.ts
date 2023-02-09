import { create } from "zustand";

export const slideIndexStore = create<slideTypes>((set) => ({
  slideIndex: 0,

  addSlideIndex: (number) => {
    set((state) => ({ slideIndex: state.slideIndex + number }));
  },
  initSlideIndex: () => {
    set({ slideIndex: 0 });
  },
}));

export interface slideTypes {
  slideIndex: number;
  addSlideIndex: (number: number) => void;
  initSlideIndex: () => void;
}
