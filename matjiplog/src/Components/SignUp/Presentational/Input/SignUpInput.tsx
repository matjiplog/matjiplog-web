import { RadioText, InputRadio, GenderInputDiv, ValidDiv, EmailBtn, ElementInput, EmailInput ,EmailAuthCodeInput, ElementP, ElementDiv, TextH, SignUpBtn } from "./style";
import {signUpProps} from "../../../../types/props/SignUp/signUpProps";

function SignUpInput({ signUpForm, onChangehandler, emailReadOnly, idReadOnly, validText, isValid, displaySeconds, displayMinutes, timer, EventEmailDoubleCheck, EventIdDoubleCheck, EventPostSignUp, EventEmailAuthCodeCheck, EventEmailAuthCodeSend}: signUpProps): JSX.Element  {

  return(
    <>
      <div style={ {marginBottom: "30px", marginTop: "10px"}}>
        <TextH>나만의 맛집을 등록하고</TextH>
        <TextH>맛집 정보를 확인 해보세요.</TextH>
      </div>
      <ElementDiv>
        <ElementP>이름</ElementP>
        <ElementInput
          type="text"
          value={signUpForm.name} 
          name="name"
          onChange={onChangehandler}
          border="#b4b4b4"
        ></ElementInput>
      </ElementDiv>
      <ElementDiv>
        <ElementP>아이디</ElementP>
        <EmailInput
          type="text"
          value={signUpForm.id} 
          name="id"
          onChange={onChangehandler}
          border="#b4b4b4"
          readOnly={idReadOnly}
          background = {idReadOnly === true ? "rgb(225,225,225)" : ""}
        ></EmailInput>
        <EmailBtn  onClick={EventIdDoubleCheck}>중복확인</EmailBtn>
      </ElementDiv>
      <ElementDiv>
        <ElementP>비밀번호</ElementP>
        <ElementInput
          type="password"
          value={signUpForm.password}
          name="password"
          onChange={onChangehandler}
          border={isValid.isPassword === false && signUpForm.password !== '' ? "red" : "#b4b4b4"}
        ></ElementInput>
      </ElementDiv>
      <ValidDiv valid="true">*숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요</ValidDiv>
      <ElementDiv>
        <ElementP>비밀번호 확인</ElementP>
        <ElementInput
          type="password"
          value={signUpForm.passwordConfirm}
          name="passwordConfirm"
          onChange={onChangehandler}
          border={isValid.isPasswordConfirm === false ? "red" : "#b4b4b4"}
        ></ElementInput>
      </ElementDiv>
      {!isValid.isPasswordConfirm && <ValidDiv valid="false">{validText.passwordCheckText}</ValidDiv>}
      <ElementDiv>
        <ElementP>닉네임</ElementP>
        <ElementInput
          value={signUpForm.nickname} 
          type="text"
          name="nickname"
          onChange={onChangehandler}
          border="#b4b4b4"
        ></ElementInput>
      </ElementDiv>
      <ElementDiv>
        <ElementP>성별</ElementP>
        <GenderInputDiv>
          <label>
            <InputRadio 
              type="radio"
              value="M"
              name="gender"
              checked={signUpForm.gender === "M"}
              onChange={onChangehandler}
            ></InputRadio>
            <RadioText>남성</RadioText>
          </label>
          <label>
            <InputRadio 
              type="radio"
              name="gender"
              value="W"
              checked={signUpForm.gender === "W"}
              onChange={onChangehandler}
            ></InputRadio>
            <RadioText>여성</RadioText>
          </label>
        </GenderInputDiv>
      </ElementDiv>
      <ElementDiv>
        <ElementP>휴대전화</ElementP>
        <ElementInput
          type="tel"
          value={signUpForm.phoneNumber} 
          name="phoneNumber"
          onChange={onChangehandler}
          border="#b4b4b4"
        ></ElementInput>
      </ElementDiv>
      <ElementDiv>
        <ElementP>이메일</ElementP>
        <EmailInput
          value={signUpForm.email} 
          name="email"
          type="email"
          placeholder="이메일 형식으로 작성해주세요"
          onChange={onChangehandler}
          border={isValid.isEmail === false && signUpForm.email !== '' ? "red" : "#b4b4b4"}
          readOnly={emailReadOnly}
          background = {emailReadOnly === true ? "rgb(225,225,225)" : ""}
        ></EmailInput>
        <EmailBtn  onClick={EventEmailDoubleCheck}>인증번호 전송</EmailBtn>
      </ElementDiv>
      <ValidDiv valid="true">*이메일 형식으로 작성해주세요</ValidDiv>
      {!emailReadOnly &&
        <ElementDiv>
          <ElementP>이메일 인증</ElementP>
          <EmailAuthCodeInput
            type="text"
            value={signUpForm.authCode} 
            name="authCode"
            onChange={onChangehandler}
            placeholder="인증번호를 입력해주세요."
            border="#b4b4b4"
            background = ""
          ></EmailAuthCodeInput>
        <EmailBtn onClick={EventEmailAuthCodeCheck}>확인</EmailBtn>
        <EmailBtn onClick={EventEmailAuthCodeSend}>재전송</EmailBtn>
        </ElementDiv>
      }
      {timer && <ValidDiv valid="false">남은시간 {displayMinutes}:{displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}</ValidDiv>}
      <SignUpBtn onClick={EventPostSignUp}>회원가입</SignUpBtn>
    </>
  );
}

export default SignUpInput;