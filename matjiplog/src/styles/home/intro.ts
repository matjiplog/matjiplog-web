import styled from "styled-components";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

export const IntroSection = styled.section`
  width: 100vw;
  overflow: hidden;
  position: relative;

`;

export const ImagesDiv = styled.div<{ slideIndex: number; length: number }>`
  display: flex;
  flex-wrap: nowrap;
  width: 300vw;
  transition: all 500ms ease-in-out;
  transform: translateX(
    ${(props) => -1 * ((100 / props.length) * props.slideIndex)}%
  );
`;

export const IntroImage = styled.img`
  width: 100vw;
  max-height: 500px;
`;

export const SlideLeftBtn = styled(FiArrowLeftCircle)`
  position: absolute;
  color: #ff6701;
  top: 40%;
  left: 5em;
  cursor: Pointer;
  z-index: 999;
`;

export const SlideRightBtn = styled(FiArrowRightCircle)`
  position: absolute;
  color: #ff6701;
  top: 40%;
  right: 5em;
  cursor: Pointer;
  z-index: 999;
`;

export const IntroTitle = styled.h1`
  position: absolute;
  top: 50%;
  right: 10%;
  font-size: 4.5rem;
  color: white;
  z-index: 999;
`;
