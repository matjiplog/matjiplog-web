import { BsArrow90DegRight, BsTelephone, BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { HiStar } from "react-icons/hi";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useMatjipDetail } from "../../../Hooks/apis/useMatjipDetail";
import { axiosMatjipDetail } from "../../../Services/matjip-service";
import { AccentP, LessP } from "../../../styles/common/font";
import { MatjipDto } from "../../../types/api/matjip";
import LodingSpinner from "../../Common/Loding";

function MatjipTop(){
  const parm = useParams();
  const { data, isLoading, isError, isFetching } = useMatjipDetail(parm);

  if(data){  
    const name = data.name;
    const starPoint = (data.ratingPortion + data.ratingService + data.ratingTaste)/3;
    const ReviewCount = 971;
    const location = data.address;
    return (
      <>
        <TopWrapDiv>
        <TopImg imgurl="/assets/images/Matjip.png"></TopImg>
        <TopInfo>
          <AccentP>{name}</AccentP>
          <StarReviewDiv>
            <HiStar size={16} color="#FFD400"></HiStar>
            <p style={{fontSize:"12px"}}>{starPoint.toFixed(1)+"/5"}</p>
            <p style={{marginLeft:"30px", fontSize:"12px",}}>{"리뷰"+ReviewCount}</p>
          </StarReviewDiv>
          <LessP style={{marginTop: "10px"}}>{location}</LessP>
          <TopIcon>
            <IconDiv>
              <BsTelephone size={20}></BsTelephone>
              <p  style={{marginTop: "10px"}}>전화</p>
            </IconDiv>
            <CenterIconDiv>
              <BsSuitHeartFill size={20} color="red"></BsSuitHeartFill>
              {/* <BsSuitHeart size={20} ></BsSuitHeart> 빈하트 */}
              <p  style={{marginTop: "10px"}}>찜</p>
            </CenterIconDiv>
            <IconDiv>
              <BsArrow90DegRight size={20} ></BsArrow90DegRight>
              <p  style={{marginTop: "10px"}}>길찾기</p>
            </IconDiv>
          </TopIcon>
        </TopInfo>
        </TopWrapDiv>
      </>
    );
  }
  else return <div>error</div>
}


const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CenterIconDiv = styled(IconDiv)`
  margin : 0px 30px 0px 30px;
`;
const TopIcon = styled.div`
  display: flex;
  margin-top: 20px;
`;
const StarReviewDiv = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const TopImg = styled.div<{ imgurl : string }>`
  width: 300px;
  height: 200px;
  background-repeat : no-repeat;
  background-size : cover;
  background-image: url(${(props) => props.imgurl});
  border-radius: 1px;
  margin: 0 auto;
`;

const TopWrapDiv = styled.div`
  margin : 20px 20% 50px 20%;
  padding: 20px 0 20px 0;
  background-color: white;
  border: 1px solid rgb(219,219,219);
  border-radius: 1px;

  @media screen and (max-width: 900px) {
    margin : 20px 20px 50px 20px;
  }
`;


export default MatjipTop;