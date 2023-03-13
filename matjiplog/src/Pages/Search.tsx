import { SearchPageWrap } from '../styles/common/wrap';

import FooterContainer from '../Components/Common/Container/Footer2/FooterContainer';
import HeaderContainer from '../Components/Common/Container/Header/HeaderContainer';
import SearchMatjipContainer from '../Components/Search/Container/SearchMatjipContainer';

function Search(): JSX.Element {
  return(
    <SearchPageWrap>
      <HeaderContainer />
      <SearchMatjipContainer />
      <FooterContainer />
    </SearchPageWrap>
  );
}

export default Search;