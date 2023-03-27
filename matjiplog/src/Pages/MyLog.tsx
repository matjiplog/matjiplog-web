import styled from "styled-components";
import Footer from "../Components/Common/Footer";
import HeaderContainer from '../Components/Common/Container/Header/HeaderContainer';

import { showLogStore } from "../stores/mylog/store";
import MapLog from "../Components/MyLog/MapLog";
import SelectLogView from "../Components/MyLog/SelectLogView";

function MyLog() {
  const { mapShow, setMapShow} = showLogStore();

  return(
    <>
      <MyLogWrap footer={mapShow.toString()}>
        <HeaderContainer></HeaderContainer>
        <SelectLogView></SelectLogView>
        <MapLog/>
      </MyLogWrap>
      {!mapShow && <Footer></Footer>}
    </>
  );
}

const MyLogWrap = styled.div<{ footer : string}>`
  min-height: 100%;
  position: relative;
  padding-bottom: ${(props) => props.footer === "false" && "100px"};
`;
export default MyLog;