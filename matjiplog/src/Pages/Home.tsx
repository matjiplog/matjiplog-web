import HeaderContainer from '../Components/Common/Container/Header/HeaderContainer';
import IntroContainer from '../Components/Home/Container/IntroContainer';
import FooterContainer from '../Components/Common/Container/Footer2/FooterContainer';
import MyPlaceMatjipContainer from '../Components/Home/Container/MyPlaceMatjipContainer';

import { HomePageWrap } from "../styles/common/wrap";

function HomePage(): JSX.Element {
  return (
    <HomePageWrap>
      <HeaderContainer/>
      <IntroContainer/>
      <MyPlaceMatjipContainer />
      <FooterContainer/>
    </HomePageWrap>
  );
}

export default HomePage;
