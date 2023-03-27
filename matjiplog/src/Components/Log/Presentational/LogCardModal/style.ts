import styled from "styled-components";
import { SkipTextDiv, BackgroundImgDiv } from "../../../../styles/divStyle";
import { FlexRowCenterCenter, FlexRowAlignCenter, FlexColumn, FlexColumnJustifyCenter, FlexRow, FlexColumnCenterCenter } from "../../../../styles/flexStyle";
import { mainFont } from "../../../../styles/fontColor";
import { ContentTopDiv } from "../LogCard/style";
import { Swiper, SwiperSlide } from "swiper/react";
import { LeftIcon, RightIcon } from "../../../../styles/icons";

export const ModalIconDiv = styled(FlexRow)`
  width: 100%;
  justify-content: flex-start;
  margin: 10px 0 10px 0;
`;

export const ModalContentDiv = styled.div`
  height: 100px;
  padding-top: 10px;
  border-top : 1px solid rgb(219,219,219);
  margin : 10px 20px 10px 20px;
  @media screen and (max-width: 1200px) {
    order: 3;
  }
`;
export const ComentSendBtn = styled(FlexRowCenterCenter)`
  width: 50px;
  height: 30px;
  font-size: 16px;
  color: ${mainFont};
`;
export const ComentInput = styled.input`
  margin: 0 20px 0 20px;
  padding: 0 10px 0 10px;
  width: 100%;
  height: 30px;
  font-size: 16px;
  outline: none;
  border: none;

`;

export const ModalInputComent = styled(FlexRowAlignCenter)`
  margin : 10px 20px 10px 20px;
  padding-top: 10px;
  border-top : 1px solid rgb(219,219,219);
  height: 50px;
  @media screen and (max-width: 1200px) {
    order: 4;
  }
`;

export const CommentNoneDiv = styled(FlexColumnCenterCenter)`
  width : 100%;
  height: 100%;
`;
export const CommentNoneH = styled.p`
  margin : 5px 0 5px 0;
  font-size: 21px;
  font-weight: 700;
  white-space: pre-wrap;
  
`;

export const ModalComentDiv = styled(FlexColumn)`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 500px;
  margin : 5px 20px 10px 20px;
  padding-top: 10px;
  border-top: solid rgb(219,219,219) 1px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export const CardAddress = styled(SkipTextDiv)`
  color: #b4b4b4;
  width: 200px;
`;

export const CardContentDIv = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  
  
`;
export const ModalImg = styled(BackgroundImgDiv)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position : center center;

`;

export const ModalImgDIv = styled(FlexColumnJustifyCenter)`
  @media screen and (min-width: 1200px) {
    flex-basis: 50%;
    border-right: 1px solid #b4b4b4;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 500px;
  }
`;

export const ContentDisplayTopDiv = styled(ContentTopDiv)`
  @media screen and (max-width: 1200px) {
    display: flex;
  }
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const ModalContentTopDiv = styled(ContentTopDiv)`
 @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Modal = styled.div`
  width: 60%;
  max-height: calc(100vh - 40px);
  z-index: 1011;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  display:flex;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

`

export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: flex-start;

`;
export const StyledSwiper = styled(Swiper)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .swiper-button-prev, .swiper-button-next {
    &::after {
      content: none;
    }
  }

  .swiper-button-prev {
    ${LeftIcon} {
      display: block;
    }
  }

  .swiper-button-next {
    ${RightIcon} {
      display: block;
    }
  }
  
  .swiper-pagination {
    // pagination 높이를 20px로 설정
  }
  
  .swiper-pagination-bullet {
    height: 10px;
    width: 10px;
    background-color:#ff6701; // 원하는 색상으로 변경
  }
  
  @media screen and (min-width: 1200px) {
    flex-basis: 50%;
    border-right: 1px solid #b4b4b4;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 500px;
  }
`;