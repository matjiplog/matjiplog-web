import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { CredentialResponse } from '@react-oauth/google';

import { ContentDiv, LoginDiv } from "./style";

import Logo from "../../Common/Logo";
import Find from "../Presentational/Find/Find";
import Input from "../Presentational/LoginInput/LoginInput";
import SideImage from "../Presentational/SideImage/SideImage";

import { useInput } from '../../../Hooks/useInput';
import { useNavigateUrl } from '../../../Hooks/useNavigateUrl';

import { useInputResult } from '../../../types/hook/common/useInput';
import { UserState } from '../../../types/store/user';

import { postLoginData } from '../../../Services/user-service';

import { JWT_EXPIRY_TIME, reloginWithRefreshToken, setAccessTokenInHeader } from '../../../utils/jwtController';

import { userStore } from '../../../stores/user';
import Meta from '../../Common/Presentational/Meta/Meta';

function LoginContainer() : JSX.Element{
  const clientid = "342265387464-l63hoeittmlehh04f2efoaohenn8gphp.apps.googleusercontent.com";
  const { isLogin, setUserSequence, setIsLogin }: UserState = userStore();

  const { handleUrl } = useNavigateUrl();
  const { form: userData, onChangeHandler }: useInputResult = useInput({ userId: "", password: ""});

  const postLoginMutation = useMutation(["login"], (loginData: {id: string, password: string}) => postLoginData(loginData), {
    onSuccess(response) {
      if(response)  {
        setAccessTokenInHeader(response.accessToken);
        setUserSequence(response.userSequence);
        setIsLogin(true);
        // setTimeout(() => { reloginWithRefreshToken(refreschToken) }, JWT_EXPIRY_TIME - 60000);
        handleUrl("/");
      };
    },
    onError(error){
      alert("로그인 실패");
    }
  })

  const doLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { userId, password } = userData;

    if(!userId || !password) return alert("정보를 입력해주세요");
    postLoginMutation.mutate(userData);
  }

  useEffect(() => {
    if(isLogin) handleUrl("/");
  }, [])

  
  const clickKakaoHandler = () =>{
    const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const REDIRECT_URI = "http://localhost:3000/kakaologin";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = KAKAO_AUTH_URL;
  }

  const clickGoogleHandler = () =>{
    const CLIENT_ID = "342265387464-l63hoeittmlehh04f2efoaohenn8gphp.apps.googleusercontent.com";
    const REDIRECT_URI = "http://localhost:3000/googlelogin";
    const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email profile`;

    window.location.href = GOOGLE_AUTH_URL;
  }

  return(
    <LoginDiv>
      <Meta title={"로그인"} description={"맛집 로그 서비스를 이용하기 위한 로그인입니다"}/>
      <Logo />
      <ContentDiv>
        <SideImage />
        <Input 
          onChangeHandler={onChangeHandler} 
          doLogin={doLogin}
          clickKakaoHandler={clickKakaoHandler}
          clickGoogleHandler={clickGoogleHandler}
        />
      </ContentDiv>
      <Find />
    </LoginDiv>
  );
}

export default LoginContainer;

