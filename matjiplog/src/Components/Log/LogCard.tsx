import styled from "styled-components";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import DropDown from "./DropDown";
import { BsHeart, BsFillChatSquareDotsFill , BsEmojiSmile, } from "react-icons/bs";
import { LessP } from "../../styles/font";
import { IUser } from "./UserLogGrid";
import useDetectClose, { useDetectCloseTypes } from "../../Hooks/useDetectClose";

function LogCard({
    info,
  } : { 
    info: IUser;
  }):JSX.Element {
  
  const dropitem = ["신고하기", "댓글보기", "취소"];

  const { isOpen, ref, removeHandler } : useDetectCloseTypes = useDetectClose(false);

  return(
    <CardDiv>
      <ContentTopDiv>
        <ProfileImg src="/assets/images/loginPicture.png"></ProfileImg>
        <TopTextDiv>
          <p>{info.userName}</p>
          <LessP>{info.Location}</LessP>
        </TopTextDiv>
        <DotDiv ref={ref} onClick={(e) =>{
            // e.stopPropagation();
            removeHandler();
          }}>
          <BiDotsHorizontalRounded size={30} color="black"></BiDotsHorizontalRounded>
          {isOpen && <DropDown items={dropitem}></DropDown>}
        </DotDiv>
      </ContentTopDiv>
      <LogImgDiv></LogImgDiv>
      <ContentDiv>
        <RNameDiv>{info.RestaurantName}</RNameDiv>
        <ReviewDiv>{info.Review}</ReviewDiv>
      </ContentDiv>
      <EmoticonDiv>
        <HeartIcon heart={info.heart}  size={20} style={ {marginRight: "10px"} }></HeartIcon>
        <BsFillChatSquareDotsFill size={20}></BsFillChatSquareDotsFill>
      </EmoticonDiv>
    </CardDiv>
  );
}

const HeartIcon = styled(BsHeart)< {heart?: string} >`
  color: ${(props) => props.heart==="true" ? "red": "black"}
`; 

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

export default LogCard;