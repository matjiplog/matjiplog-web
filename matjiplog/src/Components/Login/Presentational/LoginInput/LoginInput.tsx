import { InputProps } from "../../../../types/props/login/InputProps";
import { IdDiv, InputForm, InputLogin, LineDiv, PwDiv, SocialDiv, SocialIcon, LoginBtn, SignUpBtn } from "./style";

function LoginInput({ clickHandler } : InputProps) : JSX.Element {
  return(
    <InputForm>
      <IdDiv>
        <label>로그인</label>
        <InputLogin type="text"></InputLogin>
      </IdDiv>
      <PwDiv>
        <label>비밀번호</label>
        <InputLogin type="password"></InputLogin>
      </PwDiv>
      <LoginBtn type="submit" value="로그인"></LoginBtn>
      <SignUpBtn onClick={clickHandler}>Don't have an account?</SignUpBtn>
      <LineDiv>
        <hr style={{ color: "#b4b4b4", border: "1px solid", width: "100px" }}></hr>
        <p>or</p>
        <hr style={{ color: "#b4b4b4", border: "1px solid", width: "100px" }}></hr>
      </LineDiv>
      <SocialDiv>
        <SocialIcon url="/assets/images/kakao.png" ></SocialIcon>
        <SocialIcon url="/assets/images/google.png" ></SocialIcon>
        <SocialIcon url="/assets/images/naver.png" ></SocialIcon>
      </SocialDiv>
    </InputForm>
  );
}

export default LoginInput;