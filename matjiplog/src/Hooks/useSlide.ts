import { useEffect } from "react";

import { slideIndexStore, slideTypes } from "../stores/home/image";
import {
  slidesSelectIndexStore,
  slidesSelectTypes,
} from "../stores/createMyLog/slide";

export function useIntroIndex(length: number): useIntroIndexTypes {
  const { slideIndex, addSlideIndex, initSlideIndex }: slideTypes =
    slideIndexStore();
  const leftClick = (): void => {
    addSlideIndex(-1);
  };
  const rightClick = (): void => {
    addSlideIndex(1);
  };

  useEffect(() => {
    initSlideIndex();
  }, [initSlideIndex]);

  useEffect(() => {
    if (slideIndex === length) return initSlideIndex();
    if (slideIndex === -1) return addSlideIndex(length);
  }, [slideIndex, addSlideIndex, initSlideIndex, length]);

  return { slideIndex, leftClick, rightClick };
}

export interface useIntroIndexTypes {
  slideIndex: number;
  leftClick: () => void;
  rightClick: () => void;
}

export function useCreateMyLogIndex(length: number): useCreateMyLogIndexTypes {
  const { slideSelectIndex, addSlideIndex, initSlideIndex }: slidesSelectTypes =
    slidesSelectIndexStore();
  const leftClick = (): void => {
    addSlideIndex(-1);
  };
  const rightClick = (): void => {
    addSlideIndex(1);
  };

  useEffect(() => {
    initSlideIndex();
  }, [initSlideIndex]);

  useEffect(() => {
    if (slideSelectIndex === length) return initSlideIndex();
    if (slideSelectIndex === -1) return addSlideIndex(length);
  }, [slideSelectIndex, addSlideIndex, initSlideIndex, length]);

  return { slideSelectIndex, leftClick, rightClick };
}

export interface useCreateMyLogIndexTypes {
  slideSelectIndex: number;
  leftClick: () => void;
  rightClick: () => void;
}

// 훅을 조건부로 사용하면 X
// 훅은 무조건 컴포넌트나 커스텀 훅 안에서 선언되어야한다
