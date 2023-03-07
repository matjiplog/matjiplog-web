import { useRef, useState } from "react";
import { icons } from "react-icons/lib";
import { MapMarker, useMap } from "react-kakao-maps-sdk";
import styled from "styled-components";
import useDetectClose, { useDetectCloseTypes } from "../../Hooks/useDetectClose";
import useKakaoMarker from "../../Hooks/useKakaoMarker";
import { StarMake } from "../Common/StarMake";
import DropDown from "../Log/DropDown";
import { GoX } from "react-icons/go";

interface positionType {
  lat : number,
  lng: number,
  name: string,
  index: number,
  onClick: ()=> void,
  isClicked: boolean
}

function Marker( {index, name, lat , lng, onClick, isClicked} :positionType) : JSX.Element{
  
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const markerClick = () => {
    onClick();
    setIsVisible(!isVisible);
  }

  const windowOpenKakaoLoadFind = () =>{
    window.open(`https://map.kakao.com/link/to/${name},${lat},${lng}`, "_blank");
  }

  // https://map.kakao.com/link/to/카카오판교오피스,37.402056,127.108212

  const starpoint = 2.8
  const ReviewCount = 971;
  const location = "대구 중구 명덕로 93";
  const phone = "053-255-0742";
  return(
    <MapMarker
      position={ {lat, lng }}
      onClick={() => { markerClick()} }
      // onMouseOver={()=>(setIsVisible(true))}
      // onMouseOut={()=>(setIsVisible(false))}
      // map.panTo(marker.getPosition())
    >
      {isClicked && isVisible && 
        <DetailMarker>
          <FlexBetween style={{marginBottom: "5px"}}>
            <DetailMarkerName>{name}</DetailMarkerName>
            <GoX size={16} style={{border: "1px solid #b4b4b4" ,cursor: "pointer"}} color="black" 
              onClick={()=>{ markerClick() }}
            ></GoX>
          </FlexBetween>
          <FlexBetween>
            <FlexColumn>
              <StarItem>
                <p style={{fontWeight:"bold", fontSize:"11px", marginRight:"3px"}}>{starpoint.toFixed(1)}</p>
                {StarMake(starpoint, 12)}
                <p style={{marginLeft:"5px"}}>| 리뷰 {ReviewCount}</p>
              </StarItem>
              <DetailP>{location}</DetailP>
              <DetailP style={{color:"green"}}>{phone}</DetailP>
            </FlexColumn>
            <DetailImg url="/assets/images/loginPicture.png"></DetailImg>
          </FlexBetween>
          <FlexBetween style={{marginTop:"5px"}}>
            <DetailNav>로그</DetailNav>
            <DetailNav>상세보기</DetailNav>
            <DetailNav onClick={windowOpenKakaoLoadFind}   style={{backgroundColor:"#FF6701" , color:"white"}}>길찾기</DetailNav>
          </FlexBetween>
        </DetailMarker>
      }
    </MapMarker>
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

`;

const StarItem = styled.div`
  display: flex;
  align-items: center;
`;

const DetailMarkerName = styled.div`
  font-size: 13px;
  font-weight: 700;
`;

const DetailMarker = styled.div`
  width: 220px;
  height: 120px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export default Marker;