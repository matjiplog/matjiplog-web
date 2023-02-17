import { useState } from 'react';

export function useDisclosure(initDisclosure: boolean): useDisclosureTypes {
  const [disclosure, setDisclosure] = useState<boolean>(initDisclosure);

  const toggleDisclosure = () => { setDisclosure(!disclosure); }

  return { disclosure, toggleDisclosure };
}

export interface useDisclosureTypes {
  disclosure: boolean;
  toggleDisclosure: () => void;
}
