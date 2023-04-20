import { LoginDiv, LoginBtn, MenuBar } from './LoginStyle';

import { LoginProps } from '../../../../../types/props/Header/Login';
import { UserState } from '../../../../../types/store/user';

import { userStore } from '../../../../../stores/user';

import { useNavigateUrl } from '../../../../../Hooks/useNavigateUrl';

import { removeAccessTokenFromHeader } from '../../../../../utils/jwtController';

function Login({ navShow, toggleNavShow }: LoginProps): JSX.Element {
  const { handleUrl } = useNavigateUrl();
  const { isLogin, initUserStore }: UserState = userStore();

  return (
    <>
      <LoginDiv active={navShow ? 1 : 0}>
        {isLogin ? (
          <LoginBtn
            onClick={() => {
              initUserStore();
              removeAccessTokenFromHeader();
              handleUrl("/");
            }}
          >
            로그아웃
          </LoginBtn>
        ) : (
          <LoginBtn onClick={() => {
            handleUrl("/login");
          }}>로그인</LoginBtn>
        )}
      </LoginDiv>
      <MenuBar size={40} onClick={toggleNavShow} />
    </>
  );
}

export default Login;