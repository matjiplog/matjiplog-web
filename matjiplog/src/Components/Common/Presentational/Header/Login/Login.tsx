import { LoginDiv, LoginBtn, MenuBar } from './LoginStyle';

import { LoginProps } from '../../../../../types/props/Header/Login';

function Login({ navShow, navHandler, toggleNavShow }: LoginProps): JSX.Element {

  return <>
    <LoginDiv active={navShow ? 1 : 0}>
        <LoginBtn onClick={navHandler}>로그인</LoginBtn>
    </LoginDiv>
    <MenuBar size={40} onClick={toggleNavShow}/>
  </>
}

export default Login;