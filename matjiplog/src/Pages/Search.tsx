import styled from "styled-components";
import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";
import SearchBar from "../Components/Common/SearchBar";
import MatjipGrid from "../Components/Search/MatjipGrid";

function Search() {
  return(
    <>
      <SearchWrap>
        <Header></Header>
        <Section>
          <SearchBar></SearchBar>
          <MatjipGrid></MatjipGrid>
        </Section>
      </SearchWrap>
      <Footer></Footer>
    </>
    
  );
}

const Section = styled.div`
  padding : 2% 10% 0 10%;
`;
const SearchWrap = styled.div`
  min-height: 100%;
  position: relative;
  padding-bottom: 100px;
`;
export default Search;