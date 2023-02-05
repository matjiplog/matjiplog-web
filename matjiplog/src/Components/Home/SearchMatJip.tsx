import SearchBar from "../Common/SearchBar";
import LodingSpinner from "../Common/Loding";
import { SearchSection } from "../../styles/home/searchMatiJip";

function SearchMatJip(): JSX.Element {
  return (
    <SearchSection>
      <SearchBar></SearchBar>
      <LodingSpinner></LodingSpinner>
    </SearchSection>
  );
}

export default SearchMatJip;
