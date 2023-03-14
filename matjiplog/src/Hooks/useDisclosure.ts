import { useState } from 'react';

import { useDisclosureResult } from '../types/hook/common/useDisclosure';

export function useDisclosure(initDisclosure: boolean): useDisclosureResult{
  const [disclosure, setDisclosure] = useState<boolean>(initDisclosure);

  const toggleDisclosure = () => { 
      setDisclosure((prev) => !prev);
  }

  return { disclosure, toggleDisclosure };
}
