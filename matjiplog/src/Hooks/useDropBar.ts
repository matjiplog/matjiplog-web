import { useState } from "react";

export function useDropBar(initMenu: string) {
  const [dropBar, setDropb] = useState<boolean>(false);
  const [menu, setMenu] = useState<string>(initMenu);
  
  const toggleDropbar = () => {
    setDropb(!dropBar);
  }
  const listClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const { target, currentTarget } = e;

    if (target !== currentTarget || !currentTarget.textContent) return;

    setMenu(currentTarget.textContent);
    setDropb(false);
  };

  return { dropBar, menu, toggleDropbar, listClick };
}

export interface useDropBarTypes {
  dropBar: boolean;
  menu: string;
  toggleDropbar: () => void;
  listClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}
