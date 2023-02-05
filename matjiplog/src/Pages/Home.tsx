import Header from "../Components/Common/Header";
import Intro from "../Components/Home/Intro";
import SearchMatJip from "../Components/Home/SearchMatJip";
import HomeFooter from "../Components/Common/HomeFooter";

import { HomePageWrap } from "../styles/common/wrap";

function HomePage(): JSX.Element {
  return (
    <HomePageWrap>
      <Header></Header>
      <Intro></Intro>
      <SearchMatJip></SearchMatJip>
      <HomeFooter></HomeFooter>
    </HomePageWrap>
  );
}

export default HomePage;
