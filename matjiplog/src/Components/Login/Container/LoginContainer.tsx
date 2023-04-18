import { useNavigate } from "react-router-dom";
import Logo from "../../Common/Logo";
import Find from "../Presentational/Find/Find";
import Input from "../Presentational/LoginInput/LoginInput";
import SideImage from "../Presentational/SideImage/SideImage";
import { ContentDiv, LoginDiv } from "./style";

function LoginContainer() : JSX.Element{
  const navigate = useNavigate();
  const clickSignUpHandler = ()=>{
    return navigate("/signup");
  }
  
  const clickKakaoHandler = () =>{
    const CLIENT_ID = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const REDIRECT_URI = "http://localhost:3000/kakaologin";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
    window.location.href = KAKAO_AUTH_URL;
    // return navigate("/kakaologin");
  }

  return(
    <LoginDiv>
      <Logo></Logo>
      <ContentDiv>
        <SideImage></SideImage>
        <Input clickHandler={clickSignUpHandler} clickKakaoHandler={clickKakaoHandler}></Input>
      </ContentDiv>
      <Find></Find>
    </LoginDiv>
  );
}

export default LoginContainer;

