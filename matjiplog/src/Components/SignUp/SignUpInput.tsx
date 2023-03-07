import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSwal } from "../../Hooks/useSwal";
import useValid, { validType } from "../../Hooks/useValid";
import { axiosEmailauthCodeCheck, axiosEmailPost, axiosIdCheck, axiosSignUp } from "../../Services/user-service";
import { userDto } from "../../types/userDto";
import Logo from "../Common/Logo";

function SignUpInput(){
  const [radioCheck, setRadioCheck] = useState<string>("");
  const [minutes, setMinutes] = useState<number>(5);
  const [seconds, setSeconds] = useState<number>(0);
  const [timer, setTimer] = useState<boolean>(false);
  const [authCode, setAuthCode] = useState<string>("");
  const [emailReadOnly, setEmailReadOnly] = useState<boolean>(false);
  const [idCheck, setIdCheck] = useState(false);
  const  { apiError ,apiIdCheck, alertTextSucess, alertTextError } = useSwal();
  //signUp api data
  const [signUpForm, setSignUpForm] = useState<userDto>({
    id : '',  // 사용자 ID (이메일 형식)
    password : '', // 비밀번호
    gender : '', // 사용자 성별, 'M' : 남자, 'W' : 여자
    name : '', // 사용자 이름
    phoneNumber : '', // 폰 번호
    nickname : '', // 닉네임
    isSnsAccount : 'M' // SNS 연동 계정 여부, M' : 서비스 계정, 'K' : kakao, 'N' : naver, 'G' : google
  });
  //유효성 검사 data
  const [validForm, setValidForm] = useState<validType>({
    id : '',
    password : '',
    passwordConfirm: '',
  });
  // 유효성 검사 텍스트
  const { validText, isValid } = useValid(validForm);
  
  useEffect(()=>{
    // 이메일 인증 남은시간
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [timer , minutes, seconds])

  //radio 버튼 클릭시
  const clickRadioBtn = (radioName : string) =>{
    setRadioCheck(radioName);
    setSignUpForm({...signUpForm, gender: radioName});
  }

  //아이디 중복체크
  const IdDoubleCheck = async () => {
    if(signUpForm.id === ''){
      alertTextError("아이디를 입력해주세요.");
      return;
    }
    if(!isValid.isId){
      alertTextError("아이디 형식이 맞지 않습니다.");
      return;
    }
    await axiosIdCheck(signUpForm.id).then(async res =>{ 
      if(res){
        alertTextError("중복된 아이디가 있습니다.\n다시 시도해주세요");
        return;
      }
      setIdCheck(true);
      EmailAuthCodeSend();
    })
  }
  //이메일 인증 번호 전송
  const EmailAuthCodeSend =async () =>{
    apiIdCheck();
    const res = await axiosEmailPost(signUpForm.id); 
    console.log(res);
    if(res === true){
      alertTextSucess("성공적으로 인증번호가\n전송되었습니다. \n남은 시간을 확인해주세요.");
      setMinutes(4);
      setSeconds(59);
      setTimer(true);
    }
    else{
      alertTextError("인증번호 전송이 실패하였습니다. \n다시 시도해주세요.");
    }
  }

  //회원가입 버튼클릭시
  const PostSignUp = async () => {
    console.log(signUpForm);
    if(signUpForm.id === '' || signUpForm.password === '' || validForm.passwordConfirm === '' || signUpForm.name === '' || signUpForm.nickname === '' || signUpForm.phoneNumber === '' || radioCheck === ""){
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
    if(!emailReadOnly){
      alertTextError("이메일 인증을 해주세요");
      return;
    }
    else{
      const { data, status, error } = await axiosSignUp({...signUpForm, phoneNumber: signUpForm.phoneNumber.replace(/-/g, "")});
      if(status === 200){
        if(data.success === true){
          //"회원가입이 완료"
          //로그인 유지 후 홈 페이지로
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

  //휴대전화 숫자만 입력 + 자동 하이푼
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
    setSignUpForm({...signUpForm, phoneNumber: result});
  }
  
  // 이메일 인증 확인 클릭시
  const EventEmailAuthCodeCheck = async ()=>{
    const res = await axiosEmailauthCodeCheck(signUpForm.id, authCode)
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

  
  return(
    <SignUpDiv>
      <Logo></Logo>
      <div style={ {marginBottom: "30px", marginTop: "10px"}}>
        <TextH>나만의 맛집을 등록하고</TextH>
        <TextH>맛집 정보를 확인 해보세요.</TextH>
      </div>
      <ElementDiv>
        <ElementP>이름</ElementP>
        <ElementInput
          value={signUpForm.name} 
          type="text"
          onChange={e => setSignUpForm({...signUpForm, name: e.target.value})}
          style={{marginRight:"90px"}}
          border="#b4b4b4"
        ></ElementInput>
      </ElementDiv>
      <ElementDiv>
        <ElementP>이메일</ElementP>
        <EmailInput
          value={signUpForm.id} 
          type="email"
          placeholder="이메일 형식으로 작성해주세요"
          onChange={e => {
            if(idCheck){
              setIdCheck(false);
            }
            setSignUpForm({...signUpForm, id: e.target.value});
            setValidForm({...validForm, id:e.target.value});
          }}
          border={isValid.isId === false ? "red" : "#b4b4b4"}
          readOnly={emailReadOnly}
          background = {emailReadOnly === true ? "rgb(225,225,225)" : ""}
        ></EmailInput>
        <EmailBtn  onClick={IdDoubleCheck}>인증번호 전송</EmailBtn>
      </ElementDiv>
      <ValidDiv valid="true">*이메일 형식으로 작성해주세요</ValidDiv>
      {!emailReadOnly &&
        <ElementDiv>
          <ElementP>이메일 인증</ElementP>
          <EmailAuthCodeInput
            type="text"
            placeholder="인증번호를 입력해주세요."
            border="#b4b4b4"
            onChange={e =>{
              setAuthCode(e.target.value);
            }}
          ></EmailAuthCodeInput>
        <EmailBtn onClick={EventEmailAuthCodeCheck}>확인</EmailBtn>
        <EmailBtn onClick={EmailAuthCodeSend}>재전송</EmailBtn>
        </ElementDiv>
      }
      {timer && <ValidDiv valid="false">남은시간 {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</ValidDiv>}
      
      <ElementDiv>
        <ElementP>비밀번호</ElementP>
        <ElementInput
          value={signUpForm.password} 
          type="password"
          onChange={e => {
            setSignUpForm({...signUpForm, password: e.target.value});
            setValidForm({...validForm, password:e.target.value});
          }}
          style={{marginRight:"90px"}}
          border={isValid.isPassword === false ? "red" : "#b4b4b4"}
        ></ElementInput>
      </ElementDiv>
      <ValidDiv valid="true">*숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요</ValidDiv>
 
      <ElementDiv>
        <ElementP>비밀번호 확인</ElementP>
        <ElementInput
          value={validForm.passwordConfirm}
          type="password"
          onChange={e => {
            setValidForm({...validForm, passwordConfirm:e.target.value});
          }}
          style={{marginRight:"90px"}}
          border={isValid.isPasswordConfirm === false ? "red" : "#b4b4b4"}
        ></ElementInput>
      </ElementDiv>
      {!isValid.isPasswordConfirm && <ValidDiv valid="false">{validText.passwordCheckText}</ValidDiv>}
      <ElementDiv>
        <ElementP>닉네임</ElementP>
        <ElementInput
          value={signUpForm.nickname} 
          type="text"
          onChange={e => setSignUpForm({...signUpForm, nickname: e.target.value})}
          style={{marginRight:"90px"}}
          border="#b4b4b4"
        ></ElementInput>
      </ElementDiv>
      <ElementDiv>
        <ElementP>성별</ElementP>
        <GenderInputDiv>
          <label>
            <InputRadio type="radio"
              checked={radioCheck === "M"}
              onChange ={()=> clickRadioBtn("M")}
            ></InputRadio>
            <RadioText>남성</RadioText>
          </label>
          <label>
          <InputRadio type="radio"
              checked={radioCheck === "W"}
              onChange ={()=>clickRadioBtn("W")}
            ></InputRadio>
            <RadioText>여성</RadioText>
          </label>
        </GenderInputDiv>
      </ElementDiv>
      <ElementDiv>
        <ElementP>휴대전화</ElementP>
        <ElementInput
          value={signUpForm.phoneNumber} 
          type="text"
          onChange={e => {
            handlePhone(e.target.value);
            
          }}
          style={{marginRight:"90px"}}
          border="#b4b4b4"
        ></ElementInput>
      </ElementDiv>
      <SignUpBtn onClick={PostSignUp}>회원가입</SignUpBtn>
    </SignUpDiv>
  );
}



const RadioText = styled.span`
  font-size : 12px;
  font-weight: 700;
  vertical-align: middle;
  margin-left: 3px;
  margin-right: 15px;
`;
const InputRadio = styled.input`
  vertical-align: middle;
  appearance: none;
  border: 2px solid gray;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  cursor: pointer;
  :checked {
    border: 5px solid tomato;
  }
`;

const GenderInputDiv = styled.div`
  position: relative;
  width: 350px;
  margin-right: 90px;
  height: 30px;
  display: flex;
  align-items: center;
`;

const ValidDiv = styled.div<{ valid: string}>`
  width: 350px;
  height: 30px;
  margin: -10px 90px 0px 110px;
  color : ${props => props.valid === "false" ? "red" : "rgb(174,174,174)"};
  
`;
// color: rgb(174,174,174);
const EmailBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 35px;
  color: #FF6701;
  border: 1px solid #FF6701;
  border-radius: 3px;
  margin-left: 20px;
  font-weight: 700;
  cursor : pointer;
  &:hover{
    transform: scale(1.1);
  }
`;
const ElementInput = styled.input<{ border : string}>`
  font-size: 10px;
  width: 350px;
  height: 35px;
  padding : 0px 10px 0px 10px;
  border: 1px solid;
  border-color: ${props => props.border};
  outline: none;
  overflow: hidden;
`;

const EmailInput = styled(ElementInput)< {background : string} >`
  background-color: ${props => props.background};
`;

const EmailAuthCodeInput = styled(ElementInput)`
  width: 260px;
`;

const ElementP = styled.p`
  margin-right: 30px;
  font-size : 12px;
  font-weight: 700;
  width: 80px;
  height: 35px;
  display: flex;
  align-items: center;
`;

const ElementDiv = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const TextH = styled.h2`
  color: rgb(142, 142, 142);
  font-size: 17px;
  font-weight: 600;
  line-height: 25px;
  margin: 0px 40px 0px 40px;
  text-align: center;
`;

const SignUpBtn = styled.div`
  border: 1px solid rgb(219,219,219);
  border-radius: 3px;
  width: 400px;
  height: 35px;
  font-size: 12px;
  background-color: #FF6701;
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const SignUpDiv = styled.form`
  background-color: white;
  border: 1px solid rgb(219,219,219);
  border-radius: 1px;
  margin-top : 20px;
  padding: 10px 0px 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
`;

export default SignUpInput;