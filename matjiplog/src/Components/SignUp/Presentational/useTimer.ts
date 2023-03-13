import { useEffect, useState } from "react";

export const useTimer = () =>{
  const [seconds, setSeconds] = useState<number>(299);

  const displaySeconds = seconds % 60;
  const displayMinutes = Math.floor(seconds / 60);
  useEffect(()=>{
    const countdown = setInterval(() => {
      if(seconds > 0){
        setSeconds((state) => state - 1);
      }
      else {
        clearInterval(countdown);
      }
    }, 1000);
    return () => clearInterval(countdown);

  }, [seconds]);

  return { displaySeconds, displayMinutes , setSeconds };
}