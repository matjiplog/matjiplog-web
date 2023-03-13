import { LessP } from "../../../../styles/common/font";
import { CommentIcon, DotIcon, LikeFullIcon } from "../../../../styles/icons";
import { logDto } from "../../../../types/logDto";
import { IUser } from "../../UserLogGrid";
import { CardDiv, ContentDiv, ContentTopDiv, DotDiv, EmoticonDiv, LogImgDiv, ProfileImg, ReviewDiv, RNameDiv, TopTextDiv } from "./style";

function LogCard( {
  logInfo , 
} : {
  logInfo : logDto;
}):JSX.Element {
  
  const UserLogInfo: IUser = {
    id: 1,
    userName : "지우초이화이팅",
    Location : "대구시 달서구 이곡동",
    RestaurantName : "미친 돈가쓰",
    Review : "여기진짜 존맛탱구리집임 웨이팅은 한시간 넘지만 기다릴 정도로 맛도리입니다 ",
    heart : "true",
  };
  
  return(
    <CardDiv>
      <ContentTopDiv>
        <ProfileImg url="/assets/images/loginPicture.png"></ProfileImg>
        <TopTextDiv>
          <p>{UserLogInfo.userName}</p>
          <LessP>{UserLogInfo.Location}</LessP>
        </TopTextDiv>
        <DotDiv onClick={(e) =>{
          // ref={ref}
            // e.stopPropagation();
            // removeHandler();
          }}>
          <DotIcon size={30} color="black"></DotIcon>
          {/* {isOpen && <DropDown items={dropitem}></DropDown>} */}
        </DotDiv>
      </ContentTopDiv>
      <LogImgDiv url=""></LogImgDiv>
      <ContentDiv>
        <RNameDiv>{UserLogInfo.RestaurantName}</RNameDiv>
        <ReviewDiv>{UserLogInfo.Review}</ReviewDiv>
      </ContentDiv>
      <EmoticonDiv>
        <LikeFullIcon size={20} style={ {marginRight: "10px"} }></LikeFullIcon>
        <CommentIcon size={20}></CommentIcon>
      </EmoticonDiv>
    </CardDiv>
  );
}

export default LogCard;