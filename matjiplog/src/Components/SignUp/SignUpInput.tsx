import styled from "styled-components";

function SignUpInput() {
  return(
    <InputDiv>
      <ElementDiv>
        <label>아이디</label>
        <ElementInput type="text"></ElementInput>
      </ElementDiv>
      <IdCheckbtn>중복확인</IdCheckbtn>
      <ElementDiv>
        <label>비밀번호</label>
        <ElementInput type="password"></ElementInput>
      </ElementDiv>
      <ElementDiv>
        <label>비밀번호 확인</label>
        <ElementInput type="password"></ElementInput>
      </ElementDiv>
      <ElementDiv>
        <label>이름</label>
        <ElementInput type="text"></ElementInput>
      </ElementDiv>
      <ElementDiv>
        <label>닉네임</label>
        <ElementInput type="text"></ElementInput>
      </ElementDiv>
      <ElementDiv>
        <label>생년월일</label>
        <ElementInput type="text"></ElementInput>
      </ElementDiv>
      <ElementDiv>
        <label>휴대전화</label>
        <ElementInput type="text"></ElementInput>
      </ElementDiv>
      <ElementDiv>
        <ElementInput type="submit" value="회원가입" bgcolor = "#FF6701" color="white"></ElementInput>
      </ElementDiv>
    </InputDiv>
  );
}


const IdCheckbtn = styled.div`
  margin-top: 5px;
  color : #FF6701;
  margin-left: auto;
`;

const ElementInput = styled.input< {bgcolor?: string, color?: string} >`
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

export default SignUpInput;