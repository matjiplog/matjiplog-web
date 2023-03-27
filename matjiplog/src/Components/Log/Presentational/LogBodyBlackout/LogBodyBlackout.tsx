import { Dispatch, SetStateAction } from "react";
import { BlackoutDiv } from "./style";

function LogBodyBlackout({
  setIsModalOpen,
} : {
  setIsModalOpen : Dispatch<SetStateAction<boolean>>;
}) {
  return(
    <BlackoutDiv onClick={()=>setIsModalOpen(false)}></BlackoutDiv>
  );
}


export default LogBodyBlackout;