import { useState } from "react";

export function useScope(): useScopeType {
  const [ tasteScope, setTasteScope] = useState<boolean[]>([true, false, false, false, false]);
  const [ manyScope, setManyScope] = useState<boolean[]>([true, false, false, false, false]);
  const [ serviceScope, setServiceScope] = useState<boolean[]>([true, false, false, false, false]);

  const scopeClick = (index: number, order: string): void => {
    let scopesArray: boolean[] = [];

    for (let i = 0; i < 5; i++) scopesArray[i] = i <= index ? true : false;

    if (order === "taste") setTasteScope(scopesArray);
    if (order === "many") setManyScope(scopesArray);
    if (order === "service") setServiceScope(scopesArray);
  };

  return { tasteScope, manyScope, serviceScope, scopeClick };
}

export interface useScopeType {
  tasteScope: boolean[];
  manyScope: boolean[];
  serviceScope: boolean[];
  scopeClick: (index: number, order: string) => void;
}
