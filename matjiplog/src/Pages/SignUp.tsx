import styled from "styled-components";

import Footer from "../Components/Common/Footer";
import Logo from "../Components/Common/Logo";
import SignUpInput from "../Components/SignUp/SignUpInput";

function SignUp() {
  return (
    <>
      <SignUpWrap>
        <SignUpInput></SignUpInput>
      </SignUpWrap>
      <Footer></Footer>
    </>
  );
}

const SignUpWrap = styled.div`
  background-color: rgb(250,250,250);
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100%;
  position: relative;
  padding-bottom: 100px;
`;

export default SignUp;
