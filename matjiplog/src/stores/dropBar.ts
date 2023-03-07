import { create } from 'zustand';

import { dropBarState, dropBarMenuState } from '../types/store/dropBar';

export const dropBarStore = create<dropBarState>((set) => ({
  dropBarShow : false,

  toggleDropBar : () => {
    set((state) => ({ dropBarShow : !state.dropBarShow}));
  },

  initDropBar : () => {
    set((state) => ({dropBarShow : false}))
  }
}));

export const dropBarMenuStore = create<dropBarMenuState>((set) => ({
    dropBarMenu : "",
  
    setDropBarMenu : (menu: string) => {
      set((state) => ({ dropBarMenu : menu}));
    },
  
    initDropBarMenu : () => {
      set((state) => ({dropBarMenu : ""}))
    }
  }));