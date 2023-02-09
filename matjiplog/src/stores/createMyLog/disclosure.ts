import { create } from "zustand";

export const disclosureStore = create<disclosureStoreTypes>((set) => ({
  disclosure: false,

  toggleDisclosure: () => {
    set((state) => ({ disclosure: !state.disclosure }));
  },

  initDisclosure: () => {
    set((state) => ({ disclosure: false }));
  },
}));

export interface disclosureStoreTypes {
  disclosure: boolean;
  toggleDisclosure: () => void;
  initDisclosure: () => void;
}
