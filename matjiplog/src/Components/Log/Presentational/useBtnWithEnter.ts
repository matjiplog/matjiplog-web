import { useRef, KeyboardEvent } from "react";

export function useBtnWithEnter(callback: (logSequence: number, userSequence: number) => void) {
  const buttonRef = useRef(null) as React.MutableRefObject<any>;

  function handleKeyDown(e : KeyboardEvent<HTMLInputElement>, logSequence: number, userSequence: number) {
    if(e.key === 'Enter' && buttonRef.current){
      callback(logSequence, userSequence);
    }
  }

  return { buttonRef, handleKeyDown};
};