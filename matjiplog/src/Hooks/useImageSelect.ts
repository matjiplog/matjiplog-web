import { useState } from "react";

export function useImageSelect(): useImageSelectTypes {
  const [images, setImages] = useState<string[]>([]);
  let saveImages: string[] = [];

  const selectImages = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { target, currentTarget } = e;
    const imageLists = currentTarget.files;

    if (target !== currentTarget || !imageLists) return;

    for (let i = 0; i < imageLists.length; i++) saveImages.push(URL.createObjectURL(imageLists[i]));

    setImages(saveImages);
  };

  const deleteImages = () => { setImages([]) };


  return { images, selectImages, deleteImages };
}

export interface useImageSelectTypes {
    images: string[];
    selectImages: (e: React.ChangeEvent<HTMLInputElement>) => void;
    deleteImages: () => void;
}
