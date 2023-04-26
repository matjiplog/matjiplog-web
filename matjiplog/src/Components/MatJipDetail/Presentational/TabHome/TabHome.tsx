import { matjipDto } from "../../../../types/matjipDto";
import { StarMake } from "../../../Common/StarMake";
import { useKakaoMap } from "../useKakaoMap";
import { HomeWrap, MatjipInfoDiv, MatjipHomeTitle, InfoItem, StarItem, StarP, StarDiv, MapWrap } from "./style";

const { kakao } = window;
function TabHome({
  matjipData,
} : {
  matjipData : matjipDto,
}) {

  const { mapRef, map } = useKakaoMap(Number(matjipData.locationLatitude), Number(matjipData.locationLongitude), matjipData.name);
  
  return(
    <HomeWrap>
      <MatjipInfoDiv>
        <MatjipHomeTitle>상세정보</MatjipHomeTitle>
        <InfoItem>주소 : {matjipData.address}</InfoItem>
        <InfoItem>카테고리 : {matjipData.category}</InfoItem>
        <InfoItem>영업시간 : 11:00 ~ 21:00</InfoItem>
        <InfoItem>전화번호 : 012-345-6789</InfoItem>
      </MatjipInfoDiv>
      <MatjipInfoDiv>
      <MatjipHomeTitle>별점</MatjipHomeTitle>
        <StarItem>
          <StarP>{matjipData.ratingPortion.toFixed(1)}</StarP>
          <StarDiv>{StarMake(matjipData.ratingPortion, 17)}</StarDiv>
          <StarP>양</StarP>
        </StarItem>
        <StarItem>
          <StarP>{matjipData.ratingService.toFixed(1)}</StarP>
          <StarDiv>{StarMake(matjipData.ratingService, 17)}</StarDiv>
          <StarP>서비스</StarP>
        </StarItem>
        <StarItem>
          <StarP>{matjipData.ratingTaste.toFixed(1)}</StarP>
          <StarDiv>{StarMake(matjipData.ratingTaste, 17)}</StarDiv>
          <StarP>맛</StarP>
        </StarItem>
      </MatjipInfoDiv>
      <MapWrap>
        <MatjipHomeTitle>찾아가는 길</MatjipHomeTitle>
        <div ref={mapRef} style={{ position:"relative",  width: '100%', height: '400px' }}></div>
      </MapWrap>
    </HomeWrap>
    
  );
}

export default TabHome;