import { useEffect, useRef, useState } from "react";
import { logData } from "../../../types/logDto";

export const useScrollObserver = (callback: ()=> void) =>{
  const [lastItem, setLastItem] = useState<HTMLDivElement | null>(null);

  const ioCallback : IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((enrty) => {
      if(enrty.isIntersecting){
        callback();
        observer.unobserve(enrty.target)
      }
    })
  } 

  useEffect(() =>{
    var observer : IntersectionObserver;
    if(lastItem){
      observer = new IntersectionObserver(ioCallback, {threshold: 0.9});
      observer.observe(lastItem);    
    }
    return () => observer && observer.disconnect();
  },[lastItem]);

  
  return { setLastItem }
}