import { title } from "process";
import Swal from "sweetalert2";

export const useSwal = () => {

  const apiError = () => {
    Swal.fire({
      icon: "error",
      title: "인증 오류",
      text: "비정상적인 접근이 탐지되었습니다.",
    })
  }

  const apiIdCheck = () => {
    Swal.fire({
      title: "전송중입니다 \n잠시만 기다려주세요",
      onOpen: () => {
        Swal.showLoading();
      }
    })
  };

  const alertTextSucess = (text : string) =>{
    Swal.fire({
      icon: "success",
      title: text,
    })
  }
 
  const alertTextError = (text : string) => {
    Swal.fire({
      icon: "error",
      title: text,
    })
  }
  
  return { apiError, apiIdCheck, alertTextSucess, alertTextError };
}