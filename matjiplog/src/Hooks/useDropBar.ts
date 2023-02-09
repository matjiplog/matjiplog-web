import { useEffect } from "react";
import { dropbarStore, dropbarStoreTypes } from "../stores/common/dropbar";

export function useDropBar(initTitle: string) {
  const { dropBar, menu, toggleDropbar, initMenu, initDropbar }: dropbarStoreTypes = dropbarStore();

  useEffect(() => {
    initMenu(initTitle);
    initDropbar();
  }, [initDropbar, initMenu, initTitle]);

  const listClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const { target, currentTarget } = e;

    if (target !== currentTarget || !currentTarget.textContent) return;

    initMenu(currentTarget.textContent);
    toggleDropbar();
  };

  return { dropBar, menu, toggleDropbar, listClick };
}

export interface useDropBarTypes {
  dropBar: boolean;
  menu: string;
  toggleDropbar: () => void;
  listClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}
