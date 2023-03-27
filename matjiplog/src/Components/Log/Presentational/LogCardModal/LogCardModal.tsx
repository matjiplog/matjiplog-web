import { ImogeIcon, DotIcon, CommentIcon, LikeFullIcon, LeftIcon, RightIcon } from "../../../../styles/icons";
import DotItem from "../DotItem/DotItem";
import { ProfileImg, TopTextDiv, DotDiv, IconCount } from "../LogCard/style";
import LogCardComent from "../LogCardComent/LogCardComent";
import useDetectClose, { useDetectCloseTypes } from "../useDetectClose";
import { useBtnWithEnter } from "../useBtnWithEnter";
import { Modal, ComentInput, ModalContentTopDiv, ComentSendBtn, ModalImg, CardContentDIv, CardAddress, ModalComentDiv, ModalContentDiv, ModalInputComent, ModalIconDiv, ContentDisplayTopDiv, CommentNoneDiv, CommentNoneH, StyledSwiper, StyledSwiperSlide } from "./style";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { commentDto, logDto } from "../../../../types/logDto";

//스크롤 항상 제일 밑으로 유지하기
function LogCardModal( {
  isModalOpen,
  modalData,
  comment,
  onChangeComment,
  EventCommentCreate,
} : {
  isModalOpen : boolean,
  modalData : logDto,
  comment : string,
  onChangeComment : React.ChangeEventHandler<HTMLInputElement>,
  EventCommentCreate : (logSequence: number, userSequence: number) => void
}) {

  SwiperCore.use([Navigation, Pagination]);
  // const images = Array.isArray(modalData.imageSerial) ? modalData.imageSerial : [modalData.imageSerial];
  const images = ["", "", "", ""];
  const dotitem  : string[] = ["신고하기", "취소"];

  const { isOpen, ref, removeHandler } : useDetectCloseTypes = useDetectClose(false);
  const { buttonRef, handleKeyDown} = useBtnWithEnter(EventCommentCreate);

  
  return(
    <Modal>
      <ContentDisplayTopDiv>
        <ProfileImg url="/assets/images/loginPicture.png"></ProfileImg>
        <TopTextDiv>
          <p>{modalData.user.nickname}</p>
          <CardAddress>{modalData.matjip.address}</CardAddress>
        </TopTextDiv>
        <DotDiv>
          <DotIcon size={30} color="black"></DotIcon>
        </DotDiv>
      </ContentDisplayTopDiv>
      <StyledSwiper
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }} // 밑에 .. 생기는거
          slidesPerView={1} // Swiper 한 번에 보여지는 slide 개수
          direction="horizontal" // 가로 방향
          spaceBetween={5} // 이미지 사이의 거리 px단위 ex: 5px
        >
          <div className="swiper-button-prev"> 
            <LeftIcon size={28} color="#ff6701"/>
          </div>
          
          <div className="swiper-button-next">
            <RightIcon size={28} color="#ff6701" />
          </div>
          {images.map((image, index) => (
          <StyledSwiperSlide key={index}>
            <ModalImg url={image}/>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
      <CardContentDIv>
        <ModalContentTopDiv>
          <ProfileImg url="/assets/images/loginPicture.png"></ProfileImg>
          <TopTextDiv>
            <p>{modalData.user.nickname}</p>
            <CardAddress>{modalData.matjip.address}</CardAddress>
          </TopTextDiv>
          <DotDiv 
            ref={ref}
            onClick={(e) =>{
            e.stopPropagation();
            removeHandler();
          }}>
            <DotIcon size={30} color="black"></DotIcon>
            {isOpen && <DotItem item={dotitem}></DotItem>}
          </DotDiv>
        </ModalContentTopDiv>
        <ModalComentDiv>
          {modalData.comments.length !== 0 ? 
            modalData.comments.map((value : commentDto): JSX.Element =>{
              return <LogCardComent commentInfo={value} key={value.commentSequence}></LogCardComent>
            })
          : <CommentNoneDiv>
              <CommentNoneH>댓글이 없습니다</CommentNoneH>
              <CommentNoneH>댓글을 작성해보세요!</CommentNoneH>
            </CommentNoneDiv>}
        </ModalComentDiv>
        <ModalContentDiv>
          <ModalIconDiv>
            <LikeFullIcon size={20} color="red" ></LikeFullIcon>
            <IconCount style={ {marginLeft : "5px", marginRight: "10px"} }>{modalData.likeCount}</IconCount>
            <CommentIcon size={20} ></CommentIcon>
            <IconCount style={ {marginLeft : "5px"} }>{modalData.comments.length}</IconCount>
          </ModalIconDiv>
          <div>{modalData.content}</div>
        </ModalContentDiv>
        <ModalInputComent>
          <ImogeIcon size={30}></ImogeIcon>
          <ComentInput 
            type="text" 
            placeholder="댓글 달기" 
            name="comment" 
            value={comment}
            onChange={onChangeComment}
            onKeyDown={(e) => handleKeyDown(e, modalData.logSequence, 22)}
          ></ComentInput>
          <ComentSendBtn 
            ref={buttonRef}
            onClick={()=> EventCommentCreate(modalData.logSequence, 22)}
          >게시</ComentSendBtn>
        </ModalInputComent>
      </CardContentDIv>
    </Modal>
  
  );
}

export default LogCardModal;
