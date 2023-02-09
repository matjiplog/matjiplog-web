import styled from "styled-components";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from "react";
import DrowDown from "./DrowDown";
import { BsHeart, BsFillChatSquareDotsFill , BsEmojiSmile, } from "react-icons/bs";
import { LessP } from "../../styles/common/font";
import { IUser } from "./UserLogGrid";

function LogCard({
    info,
  } : { 
    info: IUser;
  }):JSX.Element {
 
  const [drowdown, setDrowdown] = useState(false);
  const DotClick = () =>{
    console.log("Ss")
    var Drowdown = [];
    Drowdown.push(<DrowDown></DrowDown>)
    return DrowDown;
  };

  return(
    <CardDiv>
      <ContentTopDiv>
        <ProfileImg src="/assets/images/loginPicture.png"></ProfileImg>
        <TopTextDiv>
          <p>{info.userName}</p>
          <LessP>{info.Location}</LessP>
        </TopTextDiv>
        <DotDiv>
          <BiDotsHorizontalRounded onClick={DotClick}  size={30} color="black"></BiDotsHorizontalRounded>
          {/* {drowdown && <DrowDown></DrowDown>} */}
        </DotDiv>
      </ContentTopDiv>
      <LogImgDiv></LogImgDiv>
      <ContentDiv>
        <RNameDiv>{info.RestaurantName}</RNameDiv>
        <ReviewDiv>{info.Review}</ReviewDiv>
      </ContentDiv>
      <EmoticonDiv>
        <BsHeart size={20} style={ {marginRight: "10px"} }></BsHeart>
        <BsFillChatSquareDotsFill size={20}></BsFillChatSquareDotsFill>
      </EmoticonDiv>
    </CardDiv>
  );
}

{/* if문으로 카드 div가 4개보다 작으면 만들어주기 */}
const EmoticonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 10px 20px 10px 20px;
`;
const ReviewDiv = styled.div`
  display: block;
  width: 210px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10px;
`;
const RNameDiv = styled.div`
  color: #FF6701;
  font-size : 14px;
  font-weight: bold;
`;
const ContentDiv = styled.div`
  margin: 10px 20px 10px 20px;
`;
const DotDiv =styled.div`
  margin-left: auto;
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
const LogImgDiv = styled.div`
  width: auto;
  height: 200px;
  margin: 10px;
  border : solid #b4b4b4 1px;
  border-radius: 6px;
  background-image: url("/assets/images/loginPicture.png");
  background-repeat : no-repeat;
  background-size : cover;
  box-shadow: 0px 0px 10px 3px rgba(190, 190, 190, 0.6);
`;

const CardDiv = styled.div`
  height: 375px;
  border : solid #b4b4b4 1px;
  border-radius: 6px;
  box-shadow: 0px 0px 10px 3px rgba(190, 190, 190, 0.6);
`;

const EmptyDiv = styled.div`
  height: 375px;
`;
export default LogCard;