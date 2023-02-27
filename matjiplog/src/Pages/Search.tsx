import { SearchPageWrap } from '../styles/common/wrap';

import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";
import SearchMatJip from '../Components/Search/SearchMatJip';

function Search(): JSX.Element {
  return(
    <SearchPageWrap>
      <Header />
      <SearchMatJip />
      <Footer />
    </SearchPageWrap>
  );
}

export default Search;