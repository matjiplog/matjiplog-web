import { create } from "zustand";

export const navStore = create<navTypes>((set) => ({
  navShow: false,

  toggleShow: () => {
    set((state) => ({ navShow: !state.navShow }));
  },
}));

export const slideIndexStore = create<slideTypes>((set) => ({
  slideIndex: 0,

  addSlideIndex: (number) => {
    set((state) => ({ slideIndex: state.slideIndex + number }));
  },
  initSlideIndex: () => {
    set({ slideIndex: 0 });
  },
}));

export interface navTypes {
  navShow: boolean;
  toggleShow: () => void;
}
export interface slideTypes {
  slideIndex: number;
  addSlideIndex: (number: number) => void;
  initSlideIndex: () => void;
}
