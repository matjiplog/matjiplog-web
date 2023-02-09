import { useEffect } from "react";

import { navStore, navTypes } from "../stores/home/nav";

export function useNav(): useNavTypes {
  const { nav, toggleNav, initNav }: navTypes = navStore();

  useEffect(() => {
    initNav();
  }, [initNav]);

  return { nav, toggleNav };
}

export interface useNavTypes {
  nav: boolean;
  toggleNav: () => void;
}
