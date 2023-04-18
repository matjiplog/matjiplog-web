import { useMutation } from 'react-query';
import { useEffect } from 'react';

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

function LoginContainer() : JSX.Element{
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

  return(
    <LoginDiv>
      <Logo />
      <ContentDiv>
        <SideImage />
        <Input onChangeHandler={onChangeHandler} doLogin={doLogin}/>
      </ContentDiv>
      <Find />
    </LoginDiv>
  );
}

export default LoginContainer;

