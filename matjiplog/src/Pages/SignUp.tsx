import styled from "styled-components";
import Footer from "../Components/Common/Footer";

function SignUp() {
  return(
    <SignUpDiv>
      <LogoDiv/>
      <InputDiv>
        <ElementDiv>
          <label>아이디</label>
          <SignUpInput type="text"></SignUpInput>
        </ElementDiv>
        <IdCheckbtn>중복확인</IdCheckbtn>
        <ElementDiv>
          <label>비밀번호</label>
          <SignUpInput type="password"></SignUpInput>
        </ElementDiv>
        <ElementDiv>
          <label>비밀번호 확인</label>
          <SignUpInput type="password"></SignUpInput>
        </ElementDiv>
        <ElementDiv>
          <label>이름</label>
          <SignUpInput type="text"></SignUpInput>
        </ElementDiv>
        <ElementDiv>
          <label>닉네임</label>
          <SignUpInput type="text"></SignUpInput>
        </ElementDiv>
        <ElementDiv>
          <label>생년월일</label>
          <SignUpInput type="text"></SignUpInput>
        </ElementDiv>
        <ElementDiv>
          <label>휴대전화</label>
          <SignUpInput type="text"></SignUpInput>
        </ElementDiv>
        <ElementDiv>
          <SignUpInput type="submit" value="회원가입" bgcolor = "#FF6701" color="white"></SignUpInput>
        </ElementDiv>
      </InputDiv>
      <Footer></Footer>
    </SignUpDiv>
  );
}

const IdCheckbtn = styled.div`
  margin-top: 5px;
  color : #FF6701;
  margin-left: auto;
`;

const SignUpInput = styled.input< {bgcolor?: string, color?: string} >`
  background-color :  ${(props) => props.bgcolor || "none"};
  color : ${(props) => props.color || "black"};
  width: 350px;
  height: 38px;
  border : solid #b4b4b4 1px;
  border-radius: 6px;
  padding-left : 10px;
  margin-top: 5px;
`;

const ElementDiv = styled.div`
  margin-top : 20px;
  display: flex;
  flex-direction: column;
`;


const InputDiv = styled.form`
  margin-top : 2%;
  margin-left : 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignUpDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  padding-bottom: 100px;
`;

const LogoDiv = styled.div`
  background-image: url("/assets/images/logo.png");
  width: 270px;
  height: 100px;
  background-repeat : no-repeat;
  background-size : cover;
  margin-top : 2%;
`;

export default SignUp;