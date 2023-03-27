import HeaderContainer from '../Components/Common/Container/Header/HeaderContainer';
import FooterContainer from '../Components/Common/Container/Footer2/FooterContainer';
import MyLogContainer from '../Components/MyLog/Container/MyLogContainer';

import { MyLogWrap } from '../styles/wrap';

function MyLog() {

  return(
      <MyLogWrap>
        <HeaderContainer />
        <MyLogContainer />
        <FooterContainer />
      </MyLogWrap>
  );
}

export default MyLog;