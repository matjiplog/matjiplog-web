import { useState } from "react";

import { useImageSelectResult } from '../types/hook/common/useImageSelect';

export function useImageSelect(): useImageSelectResult {
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

