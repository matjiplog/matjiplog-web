import { useEffect, useState } from "react";

export function useSlide(length: number): useSlideTypes {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const leftClick = (): void => { setSlideIndex(slideIndex-1); };
  const rightClick = (): void => { setSlideIndex(slideIndex+1); };

  useEffect(() => {
    if (slideIndex > length) return setSlideIndex(0);
    if (slideIndex <= -1) return setSlideIndex(length);
  }, [slideIndex, length]);

  return { slideIndex, leftClick, rightClick };
}

export interface useSlideTypes {
  slideIndex: number;
  leftClick: () => void;
  rightClick: () => void;
}
