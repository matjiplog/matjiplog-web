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

  const idCheckAlert = (check : boolean) =>{
    if(check){
      Swal.fire({
        icon: "success",
        showConfirmButton: false,
        title : "사용 가능한 아이디 입니다.",
        timer: 1000,
      })
    }
    else{
      Swal.fire({
        icon: "error",
        showConfirmButton: false,
        title : "중복된 아이디가 있습니다.",
        timer: 1000,
      })
    }
  }  
  
  const alertTextError = (text : string) => {
    Swal.fire({
      icon: "error",
      title: text,
    })
  }
  
  return { apiError, idCheckAlert, alertTextError };
}