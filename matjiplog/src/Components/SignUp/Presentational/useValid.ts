import { useState, useEffect } from "react";
import { warningTextType, isvalidType } from "../../../types/props/SignUp/signUpProps";
import { signUpInputType } from "../../../types/userDto";

export default function useValid(changeValue: signUpInputType) {
  const [validText, setValidText] = useState<warningTextType>({
    idText : '',
    passwordText : '',
    passwordCheckText : '',
  });
  const [isValid, setIsValid] = useState<isvalidType>({
    isId : false,
    isPassword : false,
    isPasswordConfirm : false,
  });

  //이메일 검사
  useEffect(() => {
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if(!emailRegex.test(changeValue.email)) {
      setValidText({...validText, idText:'이메일 형식을 확인해주세요'});
      setIsValid({...isValid, isId:false});
    }else {
      setValidText({...validText, idText:''});
      setIsValid({...isValid, isId:true});
    }
  }, [changeValue.email]);

  //비밀번호 검사
  useEffect(() => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    if(!passwordRegex.test(changeValue.password)) {
      setValidText({...validText, passwordText:'숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요'});
      setIsValid({...isValid, isPassword:false});
    }else {
      setValidText({...validText, passwordText:''});
      setIsValid({...isValid, isPassword:true});
    }
  }, [changeValue.password]);

  //비밀번호 일치 검사
  useEffect(() => {
    if(changeValue.password !== changeValue.passwordConfirm) {
      setValidText({...validText, passwordCheckText:'비밀번호가 일치 하지 않습니다.'});
      setIsValid({...isValid, isPasswordConfirm:false});
    }else {
      setValidText({...validText, passwordCheckText:''});
      setIsValid({...isValid, isPasswordConfirm:true});
    }
  }, [changeValue.passwordConfirm]);

  return { validText, isValid };
}