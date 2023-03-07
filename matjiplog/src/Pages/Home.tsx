import Header from "../Components/Common/Header";
import Intro from "../Components/Home/Intro";
import HomeFooter from "../Components/Common/HomeFooter";

import { HomePageWrap } from "../styles/common/wrap";
function HomePage(): JSX.Element {
  return (
    <HomePageWrap>
      <Header/>
      <Intro/>
      <HomeFooter/>
    </HomePageWrap>
  );
}

export default HomePage;
