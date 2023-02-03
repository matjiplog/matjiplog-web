import styled from "styled-components";

import Footer from "../Components/Common/Footer";
import Logo from "../Components/Common/Logo";
import LoginInput from "../Components/Login/LoginInput";
import Find from "../Components/Login/Find";
import SideImage from "../Components/Login/SideImage";

function Login() {
  
  return (
    <LoginDiv>
      <Logo></Logo>
      <WrapDiv>
        <SideImage></SideImage>
        <LoginInput></LoginInput>
      </WrapDiv>
      <Find></Find>
      <Footer></Footer>
    </LoginDiv>
  );
}

const WrapDiv = styled.div`
  display: flex;
`;
const LoginDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  padding-bottom: 100px;
`;


export default Login;