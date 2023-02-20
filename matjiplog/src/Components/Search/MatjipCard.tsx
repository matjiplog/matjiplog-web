import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AccentP, LessP } from "../../styles/common/font";
import { StarMake } from "../Common/StarMake";
import { IMatjipInfo } from "./MatjipGrid";

function MatjipCard({
  info,
} : { 
  info: IMatjipInfo;
}):JSX.Element {
  const navigate = useNavigate();
  const detailMatjipNav = () =>{
    navigate(`${info.id}`, {
      state : {
        info : info,
      }
    });
  };

  return(
    <CardDiv onClick={detailMatjipNav}>
      <MatjipImg></MatjipImg>
      <ContentDiv>
        <AccentP>{info.RestaurantName}</AccentP>
        <HeartDiv>
          <p style={{fontWeight:"bold", fontSize:"12px"}}>{info.StarPoint.toFixed(1)}</p>
          {StarMake(info.StarPoint)}
        </HeartDiv>
      </ContentDiv>
      <LessP>{info.Location}</LessP>
    </CardDiv>
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
  box-shadow : 0px 0px 10px 3px rgba(220,220,220, 0.6);
  padding: 10px;
  cursor: pointer;
`;
export default MatjipCard