import { useEffect , useState, useRef } from "react";

export const useDetectClose = (initialState : boolean,) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef(null) as React.MutableRefObject<any>;

  const removeHandler = () =>{
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const onClick = (e: React.BaseSyntheticEvent | MouseEvent) =>{
      if(ref.current != null && !ref.current.contains(e.target)){
        setIsOpen(!isOpen);
      }
    };

    if(isOpen) {
      document.addEventListener("click", onClick);
    }
    return () =>{
      document.removeEventListener("click", onClick);
    };
  }, [isOpen]);

  return { isOpen, ref, removeHandler };
};


export interface useDetectCloseTypes {
  isOpen: boolean; 
  ref: React.MutableRefObject<any>; 
  removeHandler: () => void;
}



export default useDetectClose;