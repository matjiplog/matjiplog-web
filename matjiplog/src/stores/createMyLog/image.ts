import { create } from "zustand";

export const imageSelectStore = create<imageSelectTypes>((set) => ({
  imageFile: [],

  addImageFile: (imageUrl) => {
    set((state) => ({ imageFile: imageUrl }));
  },

  delteImageFile: (imageUrl) => {
    set((state) => ({
      imageFile: state.imageFile.filter(
        (value: string, index: number): boolean => {
          return value !== imageUrl;
        }
      ),
    }));
  },

  initImageFile: () => {
    set((state) => ({ imageFile: [] }));
  },
}));

export interface imageSelectTypes {
  imageFile: string[];
  addImageFile: (imageUrl: string[]) => void;
  delteImageFile: (imageUrl: string) => void;
  initImageFile: () => void;
}
