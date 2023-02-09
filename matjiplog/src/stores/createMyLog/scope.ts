import { create } from "zustand";

export const scopeStore = create<scopeStoreTypes>((set) => ({
  tasteScope: [],
  manyScope: [],
  serviceScope: [],

  pushTasteScope: (scopeArray: boolean[]) => {
    set((state) => ({ tasteScope: scopeArray }));
  },
  pushManyScope: (scopeArray: boolean[]) => {
    set((state) => ({ manyScope: scopeArray }));
  },
  pushServiceScope: (scopeArray: boolean[]) => {
    set((state) => ({ serviceScope: scopeArray }));
  },

  initTasteScope: () => {
    set((state) => ({ tasteScope: [true, false, false, false, false] }));
  },
  initManyScope: () => {
    set((state) => ({ manyScope: [true, false, false, false, false] }));
  },
  initSeviceScope: () => {
    set((state) => ({ serviceScope: [true, false, false, false, false] }));
  },
}));

export interface scopeStoreTypes {
  tasteScope: boolean[];
  manyScope: boolean[];
  serviceScope: boolean[];

  pushTasteScope: (scopeArray: boolean[]) => void;
  pushManyScope: (scopeArray: boolean[]) => void;
  pushServiceScope: (scopeArray: boolean[]) => void;

  initTasteScope: () => void;
  initManyScope: () => void;
  initSeviceScope: () => void;
}
