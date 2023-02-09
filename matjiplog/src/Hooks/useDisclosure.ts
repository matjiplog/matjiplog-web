import { useEffect } from "react";

import { disclosureStore, disclosureStoreTypes } from "../stores/createMyLog/disclosure";

export function useDisclosure(): useDisclosureTypes {
  const { disclosure, toggleDisclosure, initDisclosure }: disclosureStoreTypes = disclosureStore();

  useEffect(() => {
    initDisclosure();
  }, [initDisclosure]);

  return { disclosure, toggleDisclosure };
}

export interface useDisclosureTypes {
  disclosure: boolean;
  toggleDisclosure: () => void;
}
