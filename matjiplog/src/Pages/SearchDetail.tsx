import styled from "styled-components";
import { useParams } from "react-router-dom";
import HeaderContainer from '../Components/Common/Container/Header/HeaderContainer';
import Footer from "../Components/Common/Footer";
// import MatjipTop from "../Components/MatJipDetail/MatjipTop";
// import MatjipTab from "../Components/MatJipDetail/MatjipTab";
import { useMatjipDetail } from "../Components/MatJipDetail/Presentational/useMatjipDetail";
import TopContainer from "../Components/MatJipDetail/Container/TopContainer";
import TabContainer from "../Components/MatJipDetail/Container/TabContainer";


function SearchDetail() {
  const parm = useParams();
  const { data, isLoading, isError, isFetching } = useMatjipDetail(parm);
  
  return(
    <>
      <SearchDetailWrap>
        <HeaderContainer></HeaderContainer>
        <TopContainer></TopContainer>
        <TabContainer></TabContainer>
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