import styled from "styled-components";

import UserLog from "../Log/UserLog";
import SearchBar from "../Common/SearchBar";

function GridLog() {
  return(
    <>
      <GridLogWrap>
        <UserLog></UserLog>
      </GridLogWrap>
    </>
  );
}

const GridLogWrap = styled.div`
  padding : 2% 10% 0 10%;
`;

export default GridLog;