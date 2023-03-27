import { AccentP, LessP } from "../../../../styles/font";
import { ArrowRightIcon, LikeFullIcon, PhoneIcon, StarIcon } from "../../../../styles/icons";
import { MatjipDto } from "../../../../types/api/matjip";
import { TopWrapDiv, TopImg, TopInfo, StarReviewDiv, TopIcon, IconDiv, CenterIconDiv } from "./style";

function MatjipTop({
  matjipInfo
} : {
  matjipInfo : MatjipDto
}
) {
  const starPoint = (matjipInfo.ratingPortion + matjipInfo.ratingService + matjipInfo.ratingTaste)/3;
  const ReviewCount = 971;

  return (
    <>
    <TopWrapDiv>
    <TopImg url="/assets/images/Matjip.png"></TopImg>
    <TopInfo>
      <AccentP>{matjipInfo.name}</AccentP>
      <StarReviewDiv>
        <StarIcon size={16} color="#FFD400"></StarIcon>
        <p style={{fontSize:"12px"}}>{starPoint.toFixed(1)+"/5"}</p>
        <p style={{marginLeft:"30px", fontSize:"12px",}}>{"리뷰"+ReviewCount}</p>
      </StarReviewDiv>
      <LessP style={{marginTop: "10px"}}>{matjipInfo.address}</LessP>
      <TopIcon>
        <IconDiv>
          <PhoneIcon size={20}></PhoneIcon>
          <p  style={{marginTop: "10px"}}>전화</p>
        </IconDiv>
        <CenterIconDiv>
          <LikeFullIcon size={20} color="red"></LikeFullIcon>
          {/* <BsSuitHeart size={20} ></BsSuitHeart> 빈하트 */}
          <p  style={{marginTop: "10px"}}>찜</p>
        </CenterIconDiv>
        <IconDiv>
          <ArrowRightIcon size={20}></ArrowRightIcon>
          <p  style={{marginTop: "10px"}}>길찾기</p>
        </IconDiv>
      </TopIcon>
    </TopInfo>
    </TopWrapDiv>
  </>
  )
}

export default MatjipTop;