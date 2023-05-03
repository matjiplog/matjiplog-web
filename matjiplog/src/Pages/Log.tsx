import styled from "styled-components";
import HeaderContainer from '../Components/Common/Container/Header/HeaderContainer';
import Footer from "../Components/Common/Footer";
import LogContainer from "../Components/Log/Container/LogContainer";

function Log() {

  return(
    <>
      <LogWrap>
        <HeaderContainer />
        <LogContainer/>
      </LogWrap>
      <Footer />
    </>
  );
}

const LogWrap = styled.div`
  min-height: 100%;
  position: relative;
  padding-bottom: 100px;
`;

export default Log;