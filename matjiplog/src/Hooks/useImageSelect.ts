import { useState } from "react";

import { useImageSelectResult } from '../types/hook/common/useImageSelect';

export function useImageSelect(): useImageSelectResult {
  const [images, setImages] = useState<string[]>([]);

  const selectImages = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let saveImages: string[] = [];
    const { target, currentTarget } = e;
    const imageLists = currentTarget.files;

    if (target !== currentTarget || !imageLists) return;

    for (let i = 0; i < imageLists.length; i++) saveImages.push(URL.createObjectURL(imageLists[i]));

    setImages(saveImages);
  };

  const deleteImage = (e: React.MouseEvent<HTMLImageElement>) => { 
    const target = e.target as HTMLImageElement;
    const { src } = target;

    setImages((prev) => prev.filter(value => value !== src)); 
  };


  return { images, selectImages, deleteImage };
}

