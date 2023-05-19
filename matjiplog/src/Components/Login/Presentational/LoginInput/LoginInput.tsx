import { useEffect, useRef } from 'react';

import { IdDiv, InputForm, InputLogin, LineDiv, PwDiv, SocialDiv, SocialIcon, LoginBtn, SignUpBtn } from "./style"

import { useNavigateUrl } from '../../../../Hooks/useNavigateUrl';

import { LoginInputProps } from '../../../../types/props/login/LoginInput';

function LoginInput({ onChangeHandler, clickKakaoHandler, clickGoogleHandler, doLogin }: LoginInputProps): JSX.Element {
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
	const NAVER_CALLBACK_URL = process.env.REACT_APP_NAVER_CALLBACK_URL;

  const naverRef = useRef<HTMLDivElement | null>(null);

  const { handleUrl } = useNavigateUrl();

  const initializeNaverLogin = () => {
		const naverLogin = new window.naver.LoginWithNaverId({
			clientId: NAVER_CLIENT_ID,
			callbackUrl: NAVER_CALLBACK_URL,
			isPopup: false,
			loginButton: { color: 'green', type: 3, height: 58 },
			callbackHandle: false,
		})
		naverLogin.init()
	}

  const handleNaverLogin = () => {
    const child = naverRef?.current?.children[0];
    if (child instanceof HTMLElement) {
        child.click();
    }
  }
  
  useEffect(() => {
		initializeNaverLogin();
	}, [])

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
        <SocialIcon onClick={clickKakaoHandler} url="/assets/images/kakao.png" />
        <SocialIcon onClick={clickGoogleHandler} url="/assets/images/google.png" style={{border : "2px solid rgb(219,219,219)"}} />
        <div ref={naverRef} id="naverIdLogin" style={{ display: 'none' }}></div>
        <SocialIcon  
          onClick={handleNaverLogin}
          url="/assets/images/naver.png" 
        />
      </SocialDiv>
    </InputForm>
  );
}

export default LoginInput;