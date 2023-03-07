import styled from "styled-components";
import { useParams } from "react-router-dom";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import MatjipTop from "../Components/Search/Detail/MatjipTop";
import MatjipTab from "../Components/Search/Detail/MatjipTab";
import { useMatjipDetail } from "../Hooks/apis/useMatjipDetail";


function SearchDetail() {
  const parm = useParams();
  const { data, isLoading, isError, isFetching } = useMatjipDetail(parm);
  
  return(
    <>
      <SearchDetailWrap>
        <Header></Header>
        <MatjipTop></MatjipTop>
        <MatjipTab></MatjipTab>
      </SearchDetailWrap>
      <Footer></Footer>
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