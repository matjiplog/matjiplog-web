import { useRef, KeyboardEvent } from "react";

export function useBtnWithEnter(callback: any) {
  const buttonRef = useRef(null) as React.MutableRefObject<any>;

  function handleKeyDownComment(e : KeyboardEvent<HTMLInputElement>, logSequence: number, userSequence: number) {
    if(e.key === 'Enter' && buttonRef.current){
      callback(logSequence, userSequence);
    }
  }

  function handleKeyDownLogSearch(e : KeyboardEvent<HTMLInputElement>) {
    if(e.key === 'Enter' && buttonRef.current){
      callback();
    }
  }

  return { buttonRef, handleKeyDownComment, handleKeyDownLogSearch};
};