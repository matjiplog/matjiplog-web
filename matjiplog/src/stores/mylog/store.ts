import { create } from 'zustand';

interface ShowMapLog {
  mapShow: boolean;
  setMapShow: (select: boolean) => void;
}

export const showLogStore = create<ShowMapLog>((set) => ({
  mapShow : true,
  setMapShow : (select) =>{
    set(() => ({ mapShow: select}));
  }
}));
