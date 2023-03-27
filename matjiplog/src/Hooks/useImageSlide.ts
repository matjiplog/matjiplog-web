import { useEffect, useState } from "react";

import { useImageSlideResult } from '../types/hook/common/useImageSlide';

export function useImageSlide(length: number): useImageSlideResult {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const leftClick = (): void => { setSlideIndex(slideIndex-1); };
  const rightClick = (): void => { setSlideIndex(slideIndex+1); };

  useEffect(() => {
    if (slideIndex > length) return setSlideIndex(0);
    if (slideIndex <= -1) return setSlideIndex(length);
  }, [slideIndex, length]);

  return { slideIndex, leftClick, rightClick };
}


