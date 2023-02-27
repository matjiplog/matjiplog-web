import styled from "styled-components";
import SearchBar from "../Components/Common/SearchBar";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import UserLogGrid from "../Components/Log/UserLogGrid";

function Log() {
  return(
    <>
      <LogWrap>
        <Header></Header>
        <Section>
          {/* <SearchBar></SearchBar> */}
          <UserLogGrid></UserLogGrid>
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