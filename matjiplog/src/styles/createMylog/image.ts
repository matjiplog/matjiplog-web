import styled from "styled-components";

import { FaRegImages } from "react-icons/fa";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { FaRegTimesCircle } from "react-icons/fa";

export const ImageDiv = styled.article`
  flex: 1 1 50%;
  border: 1px solid darkgray;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

export const ImageTitleAndBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-bottom: 1px solid darkgray;
`;

export const ImageTitle = styled.h3``;

export const IconAndFileBtn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3em;
`;

export const ImageIcon = styled(FaRegImages)`
  color: darkgray;
`;

export const ImageLabel = styled.label`
  padding: 3em;
  color: white;
  background-color: #0095f6;
  border-radius: 5px;
  cursor: pointer;
`;

export const ImageFileBtn = styled.input`
  display: none;
`;

export const ImagesSelectDiv = styled.div<{
  slideIndex: number;
  length: number;
}>`
  padding-left: 0.6px;
  display: flex;
  flex-wrap: nowrap;
  width: ${(props) => 100 * props.length}%;
  max-height: calc(100% - 30px);
  position: absolute;
  left: 0px;
  transition: all 500ms ease-in-out;
  transform: translateX(
    ${(props) => -1 * ((100 / props.length) * props.slideIndex)}%
  );
`;

export const SelectImage = styled.img<{ length: number }>`
  width: ${(props) => 100 / props.length}%;
  max-height: 100%;
`;

export const SlideLeftBtn = styled(FiArrowLeftCircle)`
  color: #ff6701;
  cursor: Pointer;
  position: absolute;
  left: 2em;
`;

export const SlideRightBtn = styled(FiArrowRightCircle)`
  color: #ff6701;
  cursor: Pointer;
  position: absolute;
  right: 2em;
`;

export const DeleteBtn = styled(FaRegTimesCircle)`
  color: #ff6701;
  cursor: Pointer;
  position: absolute;
`;
