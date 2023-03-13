import styled from "styled-components";

export const ImagesDiv = styled.div<{ slideIndex: number; length: number }>`
  display: flex;
  flex-wrap: nowrap;
  width: 300vw;
  transition: all 500ms ease-in-out;
  transform: translateX(${(props) => -1 * ((100 / props.length) * props.slideIndex)}%);
`;

export const Image = styled.img`
  width: 100vw;
  min-height: 300px;
  max-height: 550px;
`;
