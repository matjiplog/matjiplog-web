import styled from "styled-components";

import Footer from "../Components/Common/Footer";
import Logo from "../Components/Common/Logo";
import SignUpInput from "../Components/SignUp/SignUpInput";

function SignUp() {
  return(
    <SignUpDiv>
      <Logo></Logo>
      <SignUpInput></SignUpInput>
      <Footer></Footer>
    </SignUpDiv>
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

export default SignUp;