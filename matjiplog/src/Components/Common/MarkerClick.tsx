import { useState } from "react";
import { GoX } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { matjipDto } from "../../types/matjipDto";
import { StarMake } from "./StarMake";


function MarkerClick( { matjipData }: { matjipData : matjipDto }) {
  const starPoint = (matjipData.ratingPortion + matjipData.ratingService + matjipData.ratingTaste)/3;

  // const [isVisible, setIsVisible] = useState<boolean>(false); // Marker 클릭 visible
  const navigate = useNavigate();

  // const markerClick = () => {
  //   // onClick();
  //   setIsVisible(!isVisible);
  // }

  const windowOpenKakaoLoadFind = () =>{
    window.open(`https://map.kakao.com/link/to/${matjipData.name},${matjipData.locationLatitude},${matjipData.locationLongitude}`, "_blank");
  }

  const matjipDetailNav = () =>{
    navigate(`/search/${matjipData.matjipSequence}`);
  }
  // onClick={()=>{ markerClick() }}

  return(
    <DetailMarker>
      <FlexBetween style={{marginBottom: "5px"}}>
        <DetailMarkerName>{matjipData.name}</DetailMarkerName>
        <GoX size={16} style={{border: "1px solid #b4b4b4" ,cursor: "pointer"}} color="black"></GoX>
      </FlexBetween>
      <FlexBetween>
        <FlexColumn>
          <StarItem>
            <p style={{fontWeight:"bold", fontSize:"11px", marginRight:"3px"}}>{starPoint.toFixed(1)}</p>
            {StarMake(starPoint, 12)}
            <p style={{marginLeft:"5px"}}>| 리뷰 16</p>
          </StarItem>
          <DetailP>{matjipData.address}</DetailP>
          <DetailP style={{color:"green"}}>053-123-4567</DetailP>
        </FlexColumn>
        <DetailImg url="/assets/images/loginPicture.png"></DetailImg>
      </FlexBetween>
      <FlexBetween style={{marginTop:"5px"}}>
        <DetailNav>로그</DetailNav>
        <DetailNav onClick={matjipDetailNav}>상세보기</DetailNav>
        <DetailNav onClick={windowOpenKakaoLoadFind}   style={{backgroundColor:"#FF6701" , color:"white"}}>길찾기</DetailNav>
      </FlexBetween>
    </DetailMarker>
  );
}

const DetailNav = styled.div`
  border: 1px solid #b4b4b4;
  border-radius: 2px;
  width: 60px;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
`;

const DetailImg = styled.div<{ url: string }>`
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.url || "none"});
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;

`;
const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailP = styled.div`
  width: 130px;
  height: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StarItem = styled.div`
  display: flex;
  align-items: center;
`;

const DetailMarkerName = styled.div`
  width: 170px;
  height: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  font-weight: 700;
`;

const DetailMarker = styled.div`
  z-index: 999;
  position: absolute;
  width: 220px;
  height: 120px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
`;

export default MarkerClick;