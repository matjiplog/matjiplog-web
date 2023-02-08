import styled from "styled-components";
import { useState } from "react";
import SearchBar from "../Components/Common/SearchBar";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import UserLog from "../Components/Log/UserLog";

function Log() {
  
  return(
    <>
      <LogWrap>
        <Header></Header>
        {/* <hr style={{ color: "#b4b4b4", border: "1px solid", width: "85%",margin: "0px auto", marginTop: "10px" }}></hr> */}
        <Section>
          <SearchBar></SearchBar>
          <UserLog></UserLog>
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