import styled from "styled-components";
import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";

import { showLogStore } from "../stores/mylog/store";
import GridLog from "../Components/MyLog/GridLog";
import MapLog from "../Components/MyLog/MapLog";
import SelectLogView from "../Components/MyLog/SelectLogView";

function MyLog() {
  const { mapShow, setMapShow} = showLogStore();

  return(
    <>
      <MyLogWrap>
        <Header></Header>
        <SelectLogView></SelectLogView>
        {mapShow ? <MapLog/> : <GridLog/>}
      </MyLogWrap>
      <Footer></Footer>
    </>
  );
}

const MyLogWrap = styled.div`
  min-height: 100%;
  position: relative;
  padding-bottom: 100px;
`;
export default MyLog;