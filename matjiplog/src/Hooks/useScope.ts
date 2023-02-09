import { useEffect } from "react";
import { scopeStore, scopeStoreTypes } from "../stores/createMyLog/scope";

export function useScope(): useScopeTypes {
  const {
    tasteScope,
    manyScope,
    serviceScope,
    pushTasteScope,
    pushManyScope,
    pushServiceScope,
    initTasteScope,
    initManyScope,
    initSeviceScope,
  }: scopeStoreTypes = scopeStore();

  const scopeClick = (index: number, order: string): void => {
    let scopesArray: boolean[] = [];

    for (let i = 0; i < 5; i++) {
      scopesArray[i] = i <= index ? true : false;
    }
    if (order === "taste") pushTasteScope(scopesArray);
    if (order === "many") pushManyScope(scopesArray);
    if (order === "service") pushServiceScope(scopesArray);
  };

  useEffect(() => {
    initTasteScope();
    initManyScope();
    initSeviceScope();
  }, [initManyScope, initSeviceScope, initTasteScope]);

  return { tasteScope, manyScope, serviceScope, scopeClick };
}

export interface useScopeTypes {
  tasteScope: boolean[];
  manyScope: boolean[];
  serviceScope: boolean[];
  scopeClick: (index: number, order: string) => void;
}
