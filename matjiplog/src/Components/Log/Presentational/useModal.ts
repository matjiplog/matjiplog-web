import { useEffect , useState, useRef } from "react";
import { useBackScroll } from "./useBackScroll";

export const useModal = (initialState : boolean,) => {
  const { lockScroll, openScroll } = useBackScroll();
  const [isModalOpen, setIsModalOpen] = useState(initialState);

  useEffect(() =>{
    if(isModalOpen) {
      lockScroll();
    }

    else openScroll()
    

  },[isModalOpen]);

  return {isModalOpen, setIsModalOpen};
};





export default useModal;