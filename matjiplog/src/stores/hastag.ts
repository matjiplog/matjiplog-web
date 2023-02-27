import { create } from 'zustand';

import { hastagState } from '../types/store/hastag';

export const hastagStore = create<hastagState>((set) => ({
    hastags : [],
  
    addHastag : (hastag) => {
      set((state) => ({ hastags : [...state.hastags, hastag] }));
    },

    deleteHastag : (hastag) => {
        set((state) => ({ hastags : state.hastags.filter(value => value !== hastag) }));
      },
  
    initHastags : () => {
      set((state) => ({ hastags : [] }))
    }
  }));