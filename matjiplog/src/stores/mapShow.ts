import { create } from 'zustand';

import { MapShowState } from '../types/store/mapShow';

export const mapShowStore = create<MapShowState>((set) => ({
  mapShow : false,

  activeMapShow : () => {
    set(() => ({ mapShow: true }));
  },

  inActiveMapShow : () => {
    set(() => ({ mapShow: false }));
  },
}));
