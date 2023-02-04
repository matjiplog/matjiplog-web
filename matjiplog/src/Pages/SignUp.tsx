import styled from "styled-components";

import Footer from "../Components/Common/Footer";
import Logo from "../Components/Common/Logo";
import SignUpInput from "../Components/SignUp/SignUpInput";

function SignUp() {
  return (
    <>
      <SignUpWrap>
        <SignUpDiv>
          <Logo></Logo>
          <SignUpInput></SignUpInput>
        </SignUpDiv>
      </SignUpWrap>
      <Footer></Footer>
    </>
  );
}

const SignUpDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  padding-bottom: 100px;
`;

const SignUpWrap = styled.div`
  min-height: 100%;
  position: relative;
  padding-bottom: 50px;
`;

export default SignUp;
