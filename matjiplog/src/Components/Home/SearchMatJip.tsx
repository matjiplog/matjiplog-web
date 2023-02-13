import SearchBar from "../Common/SearchBar";
import LodingSpinner from "../Common/Loding";
import ResultCard from "./ResultCard";

import { SearchSection, SearchResult } from "../../styles/home/searchMatiJip";

import { useCancle, useCancleTypes } from "../../Hooks/useCancle";

function SearchMatJip(): JSX.Element {
  const { calncleDropbar }: useCancleTypes = useCancle();

  return (
    <SearchSection>
      <SearchBar />
      <SearchResult>
        <ResultCard imgUrl="/assets/images/Matjip.png" title="뜨돈ddddddddddddddddddddddㅇㅇ" scopeNumber={4.0} address="월서로 31"/>
        <ResultCard imgUrl="/assets/images/Matjip.png" title="뜨돈" scopeNumber={4.0} address="월서로 31"/>
        <ResultCard imgUrl="/assets/images/Matjip.png" title="뜨돈" scopeNumber={4.0} address="월서로 31"/>
        <ResultCard imgUrl="/assets/images/Matjip.png" title="뜨돈" scopeNumber={4.0} address="월서로 31"/>
        <ResultCard imgUrl="/assets/images/Matjip.png" title="뜨돈" scopeNumber={4.0} address="월서로 31"/>
        <ResultCard imgUrl="/assets/images/Matjip.png" title="뜨돈" scopeNumber={4.0} address="월서로 31"/>
      </SearchResult>
      {/* <LodingSpinner/> */}
    </SearchSection>
  );
}

export default SearchMatJip;
