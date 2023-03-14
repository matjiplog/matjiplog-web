import HeaderContainer from '../Components/Common/Container/Header/HeaderContainer';
import FooterContainer from '../Components/Common/Container/Footer2/FooterContainer';
import MyLogContainer from '../Components/MyLog/Container/MyLogContainer';

import { MyLogWrap } from '../styles/wrap';

// import { showLogStore } from "../stores/mylog/store";
// import GridLog from "../Components/MyLog/GridLog";
// import MapLog from "../Components/MyLog/MapLog";
// import SelectLogView from "../Components/MyLog/SelectLogView";

function MyLog() {
  // const { mapShow, setMapShow} = showLogStore();

  return(
      <MyLogWrap>
        <HeaderContainer />
        <MyLogContainer />
        {/* <SelectLogView></SelectLogView>
        {mapShow ? <MapLog/> : <GridLog/>} */}
        <FooterContainer />
      </MyLogWrap>
  );
}

export default MyLog;