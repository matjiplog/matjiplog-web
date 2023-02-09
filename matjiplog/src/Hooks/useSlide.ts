import { useEffect } from "react";

import { imageSlideStore, imageSlideStoreTypes } from "../stores/common/imageSlide";

export function useSlide(length: number): useSlideTypes {
  const { slideIndex, addSlideIndex, initSlideIndex }: imageSlideStoreTypes = imageSlideStore();
  const leftClick = (): void => { addSlideIndex(-1); };
  const rightClick = (): void => { addSlideIndex(1); };

  useEffect(() => {
    initSlideIndex();
  }, [initSlideIndex]);

  useEffect(() => {
    if (slideIndex === length) return initSlideIndex();
    if (slideIndex === -1) return addSlideIndex(length);
  }, [slideIndex, addSlideIndex, initSlideIndex, length]);

  return { slideIndex, leftClick, rightClick };
}

export interface useSlideTypes {
  slideIndex: number;
  leftClick: () => void;
  rightClick: () => void;
}
