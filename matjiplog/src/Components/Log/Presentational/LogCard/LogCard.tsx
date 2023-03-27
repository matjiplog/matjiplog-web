import { CommentIcon, LikeFullIcon, LikeIcon } from "../../../../styles/icons";
import { logDto } from "../../../../types/logDto";
import LogBodyBlackout from "../LogBodyBlackout/LogBodyBlackout";
import LogCardModal from "../LogCardModal/LogCardModal";
import useModal from "../useModal";
import { AddressDiv, CardDiv, ContentDiv, ContentTopDiv, EmoticonDiv, IconCount, LogImgDiv, ProfileImg, ReviewDiv, RNameDiv, TopTextDiv } from "./style";

function LogCard( {
  cardInfo, 
  comment,
  onChangeComment,
  EventCommentCreate,

} : {
  cardInfo : logDto;
  comment : string,
  onChangeComment : React.ChangeEventHandler<HTMLInputElement>,
  EventCommentCreate : (logSequence: number, userSequence: number) => void
}):JSX.Element {
  const {isModalOpen, setIsModalOpen} = useModal(false);
  return(
    <>
      <CardDiv onClick={()=> setIsModalOpen(true)}>
      <ContentTopDiv>
        <ProfileImg url="/assets/images/loginPicture.png"></ProfileImg>
        <TopTextDiv>
          <p>{cardInfo.user.nickname}</p>
          <AddressDiv>{cardInfo.matjip.address}</AddressDiv>
        </TopTextDiv>
      </ContentTopDiv>
      <LogImgDiv url=""></LogImgDiv>
      <ContentDiv>
        <RNameDiv>{cardInfo.matjip.name}</RNameDiv>
        <ReviewDiv>{cardInfo.content}</ReviewDiv>
      </ContentDiv>
      <EmoticonDiv>
        {/* <LikeIcon size={20}></LikeIcon> */}
        <LikeFullIcon size={20} color="red" ></LikeFullIcon>
        <IconCount style={ {marginLeft : "5px", marginRight: "10px"} }>{cardInfo.likeCount}</IconCount>
        <CommentIcon size={20} ></CommentIcon>
        <IconCount style={ {marginLeft : "5px"} }>{cardInfo.comments.length}</IconCount>
      </EmoticonDiv>
      </CardDiv>
      {isModalOpen && <LogBodyBlackout setIsModalOpen={setIsModalOpen}></LogBodyBlackout>}
      {isModalOpen && 
        <LogCardModal 
          isModalOpen={isModalOpen} 
          modalData={cardInfo}
          comment={comment}
          onChangeComment={onChangeComment}
          EventCommentCreate={EventCommentCreate}
        ></LogCardModal>}
    </>
    
  );
}

export default LogCard;