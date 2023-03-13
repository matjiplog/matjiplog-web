import { useState, useCallback, useEffect } from "react";
import { isvalidType, warningTextType } from "../../../types/props/SignUp/signUpProps";
import { signUpInputType } from "../../../types/userDto";

export const useInput = () => {

  const [signUpForm, setSignUpForm] = useState<signUpInputType>({
    email: '',
    id : '',  // 사용자 ID (이메일 형식)
    password : '', // 비밀번호
    gender : '', // 사용자 성별, 'M' : 남자, 'W' : 여자
    name : '', // 사용자 이름
    phoneNumber : '', // 폰 번호
    nickname : '', // 닉네임
    isSnsAccount : 'M', // SNS 연동 계정 여부, M' : 서비스 계정, 'K' : kakao, 'N' : naver, 'G' : google
    passwordConfirm: '',
    authCode: '',
  });
  
  const onChangehandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if(name === "passwordConfirm") return setSignUpForm({...signUpForm, passwordConfirm: value});
    if(name === "phoneNumber") return handlePhone(value);
    if(name === "authCode") return setSignUpForm({...signUpForm, authCode: value});
    else setSignUpForm(({ ...signUpForm, [name]: value }));
  }, [signUpForm]);


  const handlePhone = (value: string) => {
    const onlyNumber = value.replace(/\D+/g, '');
    const numberLength = 11;
    
    let result = "";
    for(let i=0; i<onlyNumber.length && i < numberLength; i++){
      switch (i) {
        case 3:
          result += "-";
          break;
        case 7:
          result += "-";
          break;

        default:
          break;
      }
      result += onlyNumber[i];
    }
    setSignUpForm({...signUpForm, phoneNumber: result})
  }

  return {signUpForm, onChangehandler};
};


