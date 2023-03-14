import HeaderContainer from '../Components/Common/Container/Header/HeaderContainer';
import HomeContainer from '../Components/Home/Container/HomeContainer';
import FooterContainer from '../Components/Common/Container/Footer2/FooterContainer';

import { HomePageWrap } from "../styles/wrap";

function HomePage(): JSX.Element {
  return (
    <HomePageWrap>
      <HeaderContainer />
      <HomeContainer />
      <FooterContainer />
    </HomePageWrap>
  );
}

export default HomePage;
