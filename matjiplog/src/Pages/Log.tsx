import styled from "styled-components";
import { useState } from "react";
import SearchBar from "../Components/Common/SearchBar";

function Log() {
  
  return(
    <LogDiv>
      <SearchBar></SearchBar>
    </LogDiv>
  );
}



const LogDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content : center;
  align-items : center;
`;

export default Log;