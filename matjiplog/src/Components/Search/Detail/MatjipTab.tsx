import styled from "styled-components";
import { showTabStore, tabType } from "../../../stores/detailmatjip/store";
import MatjipTabHome from "./MatjipTabHome";
import MatjipTabMenu from "./MatjipTabMenu";
import MatjipTabReview from "./MatjipTabReview";

function MatjipTab() {

  const tabList : tabType[] = [
    { name : '홈', content : <MatjipTabHome></MatjipTabHome>},
    { name : '메뉴', content : <MatjipTabMenu></MatjipTabMenu>},
    { name : '리뷰', content : <MatjipTabReview></MatjipTabReview>},
  ];
  const {tabindex, setTabindex} = showTabStore()
  const TabClick = (index: number) : void=> {
    setTabindex(index);
  }
  return(
    <TabWrap>
      <TabDiv>
        {tabList.map((value : tabType, index) : JSX.Element =>{
          return <TabLi key={index} focus={tabindex === index ? "isactive" : ""}  onClick={() => TabClick(index)}>{value.name}</TabLi>
        })}
      </TabDiv>
      <TabContent>
        {tabList[tabindex].content}
      </TabContent>
    </TabWrap>
  );
}

const TabContent = styled.div`
  padding: 0 20px 0 20px;
`;

const TabWrap = styled.div`
  position: relative;
  margin : 70px 20% 50px 20%;
  background-color: white;
  border: 1px solid rgb(219,219,219);
  border-radius: 1px;

  @media screen and (max-width: 900px) {
    margin : 20px 20px 50px 20px;
  }
`;

const TabDiv = styled.div`
  font-weight: 700;
  position: absolute;
  top: -34px;
  left: -5px;
  display: flex;
  margin: 0 5px 0 5px;
  width: 100%;
`;

const TabLi = styled.div<{ focus?: string }>`
  padding : 10px 0 10px 0;
  flex: 1 1 33%;
  text-align: center;
  border : ${(props) => props.focus === "isactive" ? "1px solid rgb(219,219,219)" : ""};
  border-bottom : ${(props) => props.focus === "isactive" ? "none" : ""};
  background-color: ${(props) => props.focus === "isactive" ? "white" : ""};
  border-radius: 2px;
`;


export default MatjipTab;