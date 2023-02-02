import Header from "../Components/Common/Header";
import Intro from "../Components/Home/Intro";
import { HomePageWrap } from "../styles/common/wrap";

function HomePage(): JSX.Element {
  return (
    <HomePageWrap>
      <Header></Header>
      <Intro></Intro>
    </HomePageWrap>
  );
}

export default HomePage;
