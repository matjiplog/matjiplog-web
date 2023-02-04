import Header from "../Components/Common/Header";
import Intro from "../Components/Home/Intro";
import SearchMatJip from "../Components/Home/SearchMatJip";
import Footer from "../Components/Common/Footer";

import { HomePageWrap } from "../styles/common/wrap";

function HomePage(): JSX.Element {
  return (
    <>
      <HomePageWrap>
        <Header></Header>
        <Intro></Intro>
        <SearchMatJip></SearchMatJip>
      </HomePageWrap>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
