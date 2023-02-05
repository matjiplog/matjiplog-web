import styled from "styled-components";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from "react";
import DrowDown from "./DrowDown";


function UserLog() {
  const userName = "지우초이화이팅";
  const Location = "대구시 달서구 이곡동";
  const RestaurantName = "미친 돈가쓰";
  const Review = "여기 진짜 존맛탱구리점임 웨이팅은 한시간 넘지만 기다릴 정도로 맛도리입니다. 여기 진짜 존맛탱구리점임 웨이팅은 한시간 넘지만 기다릴 정도로 맛도리입니다. 여기 진짜 존맛탱구리점임 웨이팅은 한시간 넘지만 기다릴 정도로 맛도리입니다."

  const hasTagMenu = ["맛집", "대구", "삽겹살", "고기", "내돈내산"];

  const [drowdown, setDrowdown] = useState(false);
  const DotClick = () =>{
    console.log("ddd")
    setDrowdown(!drowdown);
  };

  return(
    <UserLogWrap>
      <LogImgDiv></LogImgDiv>
      <LogContentlDiv>
        <ContentTopDiv>
          <ProfileImg src="/assets/images/loginPicture.png"></ProfileImg>
          <TopTextDiv>
            <p>{userName}</p>
            <LessP>{Location}</LessP>
          </TopTextDiv>
          <DotDiv>
            <BiDotsHorizontalRounded onClick={DotClick}  size={30} color="black"></BiDotsHorizontalRounded>
            {drowdown && <DrowDown></DrowDown>}
          </DotDiv>
          
         
        </ContentTopDiv>
        <ContentDiv>
          <RNameDiv>{RestaurantName}</RNameDiv>
          <ReviewDiv>{Review}</ReviewDiv>
        </ContentDiv>
      </LogContentlDiv>
    </UserLogWrap>
  );
}

const CommentDiv = styled.div`
  flex: 1 1 20%;
  background-color : black;
`;
const ReviewDiv = styled.div`
  word-wrap: break-word;
`;
const RNameDiv = styled.div`
  color: #FF6701;
  font-size : 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const ContentDiv = styled.div`
  margin: 10px 20px 10px 20px;
`;
// img="/assets/images/loginPicture.png"
// background-image : url(${(props) => props.img || "none"});

const DotDiv =styled.div`
  margin-left: auto;
`;
const LessP = styled.p`
  color: #b4b4b4;
`;
const TopTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const ProfileImg = styled.img`
  border-radius: 18px;
  width: 35px;
  height: 35px;
`;
const ContentTopDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px 10px 20px;
`;
const LogContentlDiv = styled.div`
  border : solid #b4b4b4 1px;
  border-radius: 6px;
  width: 423px;
  height: 423px;
  margin-top : 2%;
  margin-right : 10px;
  box-shadow: 0px 0px 10px 3px rgba(190, 190, 190, 0.6);
  display: flex;
  flex-direction: column;
`;
const LogImgDiv = styled.div`
  width: 423px;
  height: 423px;
  border : solid #b4b4b4 1px;
  border-radius: 6px;
  background-image: url("/assets/images/loginPicture.png");
  background-repeat : no-repeat;
  background-size : cover;
  margin-top : 2%;
  margin-right : 10px;
  box-shadow: 0px 0px 10px 3px rgba(190, 190, 190, 0.6);
`;
const UserLogWrap = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
  margin : 50px 15% 0 15%;
  @media screen and (max-width: 850px){
    flex-direction: column;
  }
`;

export default UserLog;