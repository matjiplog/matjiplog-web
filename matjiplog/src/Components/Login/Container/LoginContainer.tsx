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

  return(
    <LoginDiv>
      <Logo></Logo>
      <ContentDiv>
        <SideImage></SideImage>
        <Input clickHandler={clickSignUpHandler}></Input>
      </ContentDiv>
      <Find></Find>
    </LoginDiv>
  );
}

export default LoginContainer;

