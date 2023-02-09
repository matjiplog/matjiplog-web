import styled from "styled-components";
import { HiStar } from "react-icons/hi";
import { AccentP, LessP } from "../../styles/common/font";

function MatjipGrid() {
  const Location = "대구시 달서구 이곡동";
  const RestaurantName = "미친 돈가쓰";
  const StarPoint = 4.5;

  const StarM = () =>{
    var StarArray = [];
    for( var i=0; i<Math.floor(StarPoint); i++){
      StarArray.push(<HiStar size={20} color="#FFD400"></HiStar>)
    }
    for( var i=StarPoint; i<5; i++){
      StarArray.push(<HiStar size={20} color="#D3D3D3"></HiStar>)
    }
    return StarArray;
  }

  return(
    <MatjipWrap>
      <CardDiv>
        <MatjipImg></MatjipImg>
        <ContentDiv>
          <AccentP>{RestaurantName}</AccentP>
          <HeartDiv>
            <p style={{fontWeight:"bold", fontSize:"12px"}}>{StarPoint.toFixed(1)}</p>
            {StarM()}
          </HeartDiv>
        </ContentDiv>
        <LessP>{Location}</LessP>
      </CardDiv>
      
      <EmptyDiv></EmptyDiv>
      <EmptyDiv></EmptyDiv>
      <EmptyDiv></EmptyDiv>
    </MatjipWrap>
  );
}

const HeartDiv = styled.div`
  display: flex;
  align-items: center;
`;
const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MatjipImg = styled.div`
  width: auto;
  height: 150px;
  background-image: url("/assets/images/Matjip.png");
  background-repeat : no-repeat;
  background-size : cover;
  margin-bottom : 10px;
`;

const CardDiv = styled.div`
  height: 230px;
  border: solid #b4b4b4 1px;
  border-radius: 6px;
  box-shadow : 0px 0px 10px 3px rgba(190,190,190, 0.6);
  padding: 10px;
`;
const EmptyDiv = styled.div`
  height: 230px;
`;
const MatjipWrap = styled.div`
  padding-top: 5%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 20px;
`;

export default MatjipGrid;