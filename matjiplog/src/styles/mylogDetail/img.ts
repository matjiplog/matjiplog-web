import styled from "styled-components";

import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";


export const ImagesDiv = styled.div<{ slideIndex: number; length: number }>`
  width: ${(props) => 100 * props.length}%;
  height: 100%;
  transition: all 500ms ease-in-out;
  transform: translateX(
    ${(props) => -1 * ((100 / props.length) * props.slideIndex)}%
  );
`;

export const Image = styled.img<{ length: number }>`
  width: ${(props) => 100 / props.length}%;
  height: 100%;
  border-radius: 10px;
`;

export const SlideLeftBtn = styled(FiArrowLeftCircle)`
  position: absolute;
  top: 50%;
  left: 0.5em;
  font-size: 5em;
  color: #ff6701;
  cursor: Pointer;
  z-index: 999;
`;

export const SlideRightBtn = styled(FiArrowRightCircle)`
  position: absolute;
  font-size: 5em;
  color: #ff6701;
  top: 50%;
  right: 0.5em;
  cursor: Pointer;
  z-index: 999;
`;
