import styled from "styled-components";
import HeaderContainer from '../Components/Common/Container/Header/HeaderContainer';
import Footer from "../Components/Common/Footer";
import MatJipDetailContainer from "../Components/MatJipDetail/Container/MatJipDetailContainer";

function SearchDetail() {
  
  return(
    <>
      <SearchDetailWrap>
        <HeaderContainer />
        <MatJipDetailContainer />
      </SearchDetailWrap>
      <Footer />
    </>
  );
}

const SearchDetailWrap = styled.div`
  min-height: 100%;
  position: relative;
  padding-bottom: 100px;
  background-color: rgb(250,250,250);
`;

export default SearchDetail;