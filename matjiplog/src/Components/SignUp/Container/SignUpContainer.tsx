import { useEffect, useState } from "react";
import { useSwal } from "../Presentational/useSwal";
import { axiosEmailauthCodeCheck, axiosEmailCheck, axiosEmailPost, axiosIdCheck, axiosSignUp } from "../../../Services/user-service";
import Logo from "../../Common/Logo";
import SignUpInput from "../Presentational/Input/SignUpInput";
import { useInput } from "../Presentational/useInput";
import { useTimer } from "../Presentational/useTimer";
import useValid from "../Presentational/useValid";
import { SignUpDiv } from "./style";

function SignUpContainer() : JSX.Element  {
  const { signUpForm, onChangehandler } = useInput(); 
  const { validText, isValid } = useValid(signUpForm);
  const { displaySeconds, displayMinutes, setSeconds } = useTimer();
  const { apiError ,apiIdCheck, alertTextSucess, alertTextError } = useSwal();
  
  const [timer , setTimer] = useState<boolean>(false);
  const [emailReadOnly, setEmailReadOnly] = useState<boolean>(false);
  const [idReadOnly, setIdReadonly] = useState<boolean>(false);
  const [idCheck, setIdCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);

  //이메일 중복체크
  const EventEmailDoubleCheck = async () => {
    if(signUpForm.email === ''){
      alertTextError("이메일를 입력해주세요.");
      return;
    }
    if(!isValid.isEmail){
      alertTextError("이메일 형식이 맞지 않습니다.");
      return;
    }
    await axiosEmailCheck(signUpForm.email).then(async res =>{ 
      if(res){
        alertTextError("중복된 이메일이 있습니다.\n다시 시도해주세요");
        return;
      }
      setEmailCheck(true);
      EventEmailAuthCodeSend();
    })
  }

  //아이디 중복 확인
  const EventIdDoubleCheck = async () =>{
    if(signUpForm.id === ''){
      alertTextError("아이디를 입력해주세요.");
      return;
    }
    await axiosIdCheck(signUpForm.id).then(async res =>{ 
      if(res){
        alertTextError("중복된 아이디가 있습니다.\n다시 시도해주세요");
        return;
      }
      alertTextSucess("사용할수 있는 아이디 입니다.");
      setIdCheck(true);
      setIdReadonly(true);
    })
  }

  //회원가입
  const EventPostSignUp = async () => {

    if(signUpForm.id === '' || signUpForm.password === '' || signUpForm.passwordConfirm === '' || signUpForm.name === '' || signUpForm.nickname === '' || signUpForm.phoneNumber === '' || signUpForm.gender === ""){
      alertTextError("모든 정보를 입력해주세요");
      return;
    }
    if(!isValid.isPassword){
      alertTextError("비밀번호가 형식에 맞지 않습니다.");
      //숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요
      return;
    }
    if(!isValid.isPasswordConfirm){
      alertTextError("비밀번호가 일치한지 확인해주세요");
      return;
    }
    if(!idCheck){
      alertTextError("아이디 중복확인을 해주세요")
    }
    if(!emailCheck){
      alertTextError("이메일 중복확인을 해주세요")
    }
    if(!emailReadOnly){
      alertTextError("이메일 인증을 해주세요");
      return;
    }
    
    else{
      delete signUpForm.passwordConfirm;
      delete signUpForm.authCode;
      const { data, status, error } = await axiosSignUp({
        ...signUpForm, phoneNumber: signUpForm.phoneNumber.replace(/-/g, ""),
        userSequence: 0,
        imageSerial: ""
      });
      if(status === 200){
        if(data.success === true){
          alertTextSucess("회원가입이 완료되었습니다.");

        }
        else{
          //회원가입 실패
        }
      }
      else{
        apiError();
        console.log(data);
        console.log(status);
        console.log(error);
      }
    }
  }

 // 이메일 인증 확인 클릭시
 const EventEmailAuthCodeCheck = async ()=>{
  const res = await axiosEmailauthCodeCheck(signUpForm.email, signUpForm.authCode)
  console.log(res);
  if(res){
    alertTextSucess("인증번호가 일치합니다.");
    setEmailReadOnly(true);
    setTimer(false);
  }
  else{
    alertTextError("인증번호가 일치하지 않습니다.");
  }
}

//이메일 인증 번호 전송
const EventEmailAuthCodeSend =async () =>{
  setEmailReadOnly(false);
  if(signUpForm.email === ''){
    alertTextError("이메일을 입력해주세요.");
    return;
  }
  apiIdCheck();
  const res = await axiosEmailPost(signUpForm.email); 
  console.log(res);
  if(res === true){
    alertTextSucess("성공적으로 인증번호가\n전송되었습니다. \n남은 시간을 확인해주세요.");
    setSeconds(299);
    setTimer(true);
  }
  else{
    alertTextError("인증번호 전송이 실패하였습니다. \n다시 시도해주세요.");
  }
}




  return(
    <SignUpDiv>
      <Logo></Logo>
      <SignUpInput
        signUpForm={signUpForm}
        onChangehandler={onChangehandler}
        emailReadOnly={emailReadOnly}
        idReadOnly={idReadOnly}
        validText={validText}
        isValid={isValid}
        displaySeconds={displaySeconds}
        displayMinutes={displayMinutes}
        timer={timer}
        EventEmailDoubleCheck={EventEmailDoubleCheck}
        EventIdDoubleCheck={EventIdDoubleCheck}
        EventPostSignUp={EventPostSignUp}
        EventEmailAuthCodeCheck={EventEmailAuthCodeCheck}
        EventEmailAuthCodeSend={EventEmailAuthCodeSend}
      ></SignUpInput>
    </SignUpDiv>
  );
}

export default SignUpContainer;