import Logo from "../../Common/Logo";
import Find from "../Find";
import { LoginDiv } from "./style";

function LoginContainer() : JSX.Element{
  return(
    <LoginDiv>
      <Logo></Logo>
      
      <Find></Find>
       {/* <Logo></Logo>
        <WrapDiv>
          <SideImage></SideImage>
          <LoginInput></LoginInput>
        </WrapDiv>
        <Find></Find> */}
    </LoginDiv>
  );
}

export default LoginContainer;

