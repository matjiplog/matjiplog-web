import { IdDiv, InputForm, InputLogin, LineDiv, PwDiv, SocialDiv, SocialIcon, LoginBtn, SignUpBtn } from "./style";

import { useNavigateUrl } from '../../../../Hooks/useNavigateUrl';

import { LoginInputProps } from '../../../../types/props/login/LoginInput';

function LoginInput({ onChangeHandler, clickKakaoHandler, doLogin }: LoginInputProps): JSX.Element {
  const { handleUrl } = useNavigateUrl();

  return(
    <InputForm onSubmit={doLogin}>
      <IdDiv>
        <label>로그인</label>
        <InputLogin type="text" name='userId' onChange={onChangeHandler}/>
      </IdDiv>
      <PwDiv>
        <label>비밀번호</label>
        <InputLogin type="password" name='password' onChange={onChangeHandler}/>
      </PwDiv>
      <LoginBtn type="submit" value="로그인"></LoginBtn>
      <SignUpBtn onClick={()=>{ handleUrl("/signup") }}>Don't have an account?</SignUpBtn>
      <LineDiv>
        <hr style={{ color: "#b4b4b4", border: "1px solid", width: "100px" }}></hr>
        <p>or</p>
        <hr style={{ color: "#b4b4b4", border: "1px solid", width: "100px" }}></hr>
      </LineDiv>
      <SocialDiv>
        <SocialIcon onClick={clickKakaoHandler} url="/assets/images/kakao.png" ></SocialIcon>
        <SocialIcon url="/assets/images/google.png" ></SocialIcon>
        <SocialIcon url="/assets/images/naver.png" ></SocialIcon>
      </SocialDiv>
    </InputForm>
  );
}

export default LoginInput;