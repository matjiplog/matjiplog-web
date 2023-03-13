import { createContext } from 'react';

export const handlerContext = createContext<{
    keywordSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void,
    addHasTag: (hasTag: string) => void,
    deleteHasTag: (hasTag: string) => void,
  }>({
    keywordSubmitHandler: () => {},
    addHasTag: () => {},
    deleteHasTag: () => {},
  });