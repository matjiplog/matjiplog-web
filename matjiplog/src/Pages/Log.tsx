import styled from "styled-components";
// import SearchBar from "../Components/Common/SearchBar";
import HeaderContainer from '../Components/Common/Container/Header/HeaderContainer';
import Footer from "../Components/Common/Footer";
import UserLogGrid from "../Components/Log/UserLogGrid";
import LogContainer from "../Components/Log/Container/LogContainer";

function Log() {
  return(
    <>
      <LogWrap>
        <HeaderContainer></HeaderContainer>
        <Section>
          {/* <SearchBar></SearchBar> */}
          <LogContainer/>
        </Section>  
      </LogWrap>
      <Footer></Footer>
    </>
  );
}

const Section = styled.div`
  padding : 2% 10% 0 10%;
`;

const LogWrap = styled.div`
  min-height: 100%;
  position: relative;
  padding-bottom: 100px;
`;

export default Log;