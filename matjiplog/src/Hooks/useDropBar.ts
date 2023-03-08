import { useEffect } from "react";

import { dropBarStore, dropBarMenuStore } from '../stores/dropBar';

import { dropBarState, dropBarMenuState } from '../types/store/dropBar';
import { useDropBarResult } from '../types/hook/dropBar';

export function useDropBar(initMenu: string): useDropBarResult {
  const {dropBarShow, toggleDropBar, initDropBar}: dropBarState = dropBarStore();
  const {dropBarMenu, setDropBarMenu, initDropBarMenu}: dropBarMenuState = dropBarMenuStore();

  const listClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const { target, currentTarget } = e;

    if (target !== currentTarget || !currentTarget.textContent) return;

    setDropBarMenu(currentTarget.textContent);
    toggleDropBar();
  };

  useEffect(() => {
    initDropBar();
    setDropBarMenu(initMenu);
  }, [initDropBar, initMenu, setDropBarMenu])

  return { dropBarShow, dropBarMenu, toggleDropBar, listClick };
}

