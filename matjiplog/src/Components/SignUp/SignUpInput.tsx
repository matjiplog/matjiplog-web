import styled from "styled-components";
import { useState, useRef } from "react"
import { useDropBar } from "../../Hooks/useDropBar";
import { DropItem, DropItems } from "../../styles/common/dropBar";
import { IoMdArrowDropdown } from "react-icons/io";
import { userDto } from "../../types/userDto";
import useValid, { validType } from "../../Hooks/useValid";
import Logo from "../Common/Logo";
import { useSwal } from "../../Hooks/useSwal";
import { axiosIdCheck, axiosSignUp } from "../../Services/user-service";
import { useDropBarResult } from '../../types/hook/dropBar';

function SignUpInput() {
  const genderItems = ["남자", "여자"];
  const { dropBarShow, dropBarMenu, toggleDropBar, listClick }: useDropBarResult = useDropBar("성별을 선택하세요");

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
  
  const [validForm, setValidForm] = useState<validType>({
    id : '',
    password : '',
    passwordConfirm: '',
  });
  const { validText, isValid } = useValid(validForm);

  const [idCheck, setIdCheck] = useState(false);
  const  { apiError ,idCheckAlert, alertTextError } = useSwal();
  
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

    const { data, status, error } = await axiosIdCheck(signUpForm.id)
    if(status === 200){
      if(!data.success){
        setIdCheck(true);
        idCheckAlert(true);  
      }
      else{
        idCheckAlert(false);  
      }
    }
    else{
      apiError();
      console.log(data);
      console.log(status);
      console.log(error);
    }
  }

  //회원가입 버튼클릭시
  const PostSignUp = async () => {
    console.log(signUpForm);
    {dropBarMenu === "남자" ? setSignUpForm({...signUpForm, gender: 'M'}) : setSignUpForm({...signUpForm, gender: 'W'})};
    if(signUpForm.id === '' || signUpForm.password === '' || validForm.passwordConfirm === '' || signUpForm.name === '' || signUpForm.nickname === '' || signUpForm.phoneNumber === '' || dropBarMenu === "성별을 선택하세요"){
      alertTextError("모든 정보를 입력해주세요");
      return;
    }
    if(!idCheck){
      alertTextError("아이디 중복확인을 해주세요");
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
    else{
      const { data, status, error } = await axiosSignUp({...signUpForm, phoneNumber: signUpForm.phoneNumber.replace(/-/g, "")});
      console.log(data);
      console.log(status);
      console.log(error);
      if(status === 200){
        if(data.success === true){
          //"회원가입이 완료"
          //로그인 유지 후 홈 페이지로
          alert("status 200")
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


  return(
    <InputDiv>
      <Logo></Logo>
      <div style={ {marginBottom: "10px", marginTop: "10px"}}>
        <TextH>나만의 맛집을 등록하고</TextH>
        <TextH>맛집 정보를 확인 해보세요.</TextH>
      </div>
      <ElementDiv>
        <Label>아이디</Label>
        <ElementInput  
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
          ></ElementInput>
      </ElementDiv>
      <WarningIdDiv>
        {!isValid.isId && <div style={ { color:"red"}}>{validText.idText}</div>}
        <IdCheckbtn onClick={IdDoubleCheck}>중복확인</IdCheckbtn>
      </WarningIdDiv>
      <ElementDiv>
        <Label>비밀번호</Label>
        <ElementInput 
          value={signUpForm.password} 
          type="password"
          onChange={e => {
            setSignUpForm({...signUpForm, password: e.target.value});
            setValidForm({...validForm, password:e.target.value});
          }}
          ></ElementInput>
      </ElementDiv>
      {!isValid.isPassword && <div style={ { color:"red"} }>{validText.passwordText}</div>}
      <ElementDiv>
        <Label>비밀번호 확인</Label>
        <ElementInput 
          value={validForm.passwordConfirm}
          type="password"
          onChange={e => {
            setValidForm({...validForm, passwordConfirm:e.target.value});
          }}
        ></ElementInput>
      </ElementDiv>
      {!isValid.isPasswordConfirm && <div style={ { color:"red"} }>{validText.passwordCheckText}</div>}
      <ElementDiv>
        <Label>이름</Label>
        <ElementInput 
          value={signUpForm.name} 
          type="text"
          onChange={e => setSignUpForm({...signUpForm, name: e.target.value})}
          ></ElementInput>
      </ElementDiv>
      <ElementDiv>
        <Label>닉네임</Label>
        <ElementInput 
          value={signUpForm.nickname} 
          type="text"
          onChange={e => setSignUpForm({...signUpForm, nickname: e.target.value})}
          ></ElementInput>
      </ElementDiv>
      <ElementDiv>
        <Label>성별</Label>
        <GenderDropBarDiv>
          <GenderTitle onClick={toggleDropBar}>{dropBarMenu}
            <IoMdArrowDropdown size={15}></IoMdArrowDropdown>
          </GenderTitle>
          {dropBarShow && 
          <DropItems>
            {genderItems.map((value: string, index: number): JSX.Element => {
              return <DropItem key={index} onClick={listClick} className={dropBarMenu === value ? "select" : ""}>{value}</DropItem>
            })}
          </DropItems>}
        </GenderDropBarDiv>
      </ElementDiv>
      <ElementDiv>
        <Label>휴대전화</Label>
        <ElementInput 
          value={signUpForm.phoneNumber} 
          type="text"
          onChange={e => {
            handlePhone(e.target.value);
            
          }}
        ></ElementInput>
      </ElementDiv>
      <SignUpBtn onClick={PostSignUp}>회원가입</SignUpBtn>
    </InputDiv>
  );
};

const Label = styled.label`
  color: gray;
`;
const TextH = styled.h2`
  color: rgb(142, 142, 142);
  font-size: 17px;
  font-weight: 600;
  line-height: 25px;
  margin: 0px 40px 0px 40px;
  text-align: center;
`;

const GenderDropBarDiv = styled.div`
  position: relative;
  flex-basis: 10%;
`;
const GenderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 27px;
`;

const IdCheckbtn = styled.div`
  color : #FF6701;
  cursor: pointer;
  margin-left : auto;
  &:hover {
    transform: scale(1.1);
  }
`;

const SignUpBtn = styled.div`
  border: 1px solid rgb(219,219,219);
  border-radius: 3px;
  padding: 2px 8px 0px 8px;
  margin : 20px 0px 30px 0px;
  width: 256px;
  height: 44px;
  font-size: 12px;
  background-color: #FF6701;
  color: white;
  text-align: center;
  line-height: 44px;
  font-weight: 700;
`;
const ElementInput = styled.input`
  border:0 solid black;
  outline: none;
  overflow: hidden;
  color: rgb(38,38,38);
  height: 27px;
  font-size: 10px;
  ::placeholder {
    font-size: 10px;
  }
`;

const WarningIdDiv = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
`;

const ElementDiv = styled.div`
  border: 1px solid rgb(219,219,219);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 5px 40px 6px 40px;
  padding: 2px 8px 0px 8px;
  width: 256px;
`;

const InputDiv = styled.form`
  background-color: white;
  border: 1px solid rgb(219,219,219);
  border-radius: 1px;
  margin-top : 20px;
  padding: 10px 0px 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 470px;
`;

export default SignUpInput;