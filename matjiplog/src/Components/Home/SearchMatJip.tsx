import SearchBar from "../Common/SearchBar";

import { MatJipItems, SearchSection } from "../../styles/home/searchMatiJip";

function SearchMatJip(): JSX.Element {
  return (
    <SearchSection>
      <SearchBar></SearchBar>
      <MatJipItems></MatJipItems>
    </SearchSection>
  );
}

export default SearchMatJip;
