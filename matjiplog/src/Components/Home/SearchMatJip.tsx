import SearchBar from "../Common/SearchBar";
import LodingSpinner from "../Common/Loding";
import { SearchSection } from "../../styles/home/searchMatiJip";

import { useCancle, useCancleTypes } from "../../Hooks/useCancle";

function SearchMatJip(): JSX.Element {
  const { calncleDropbar }: useCancleTypes = useCancle();

  return (
    <SearchSection>
      <SearchBar></SearchBar>
      <LodingSpinner></LodingSpinner>
    </SearchSection>
  );
}

export default SearchMatJip;
