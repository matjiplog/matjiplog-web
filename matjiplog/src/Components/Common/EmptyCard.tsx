import styled from "styled-components";

export const EmptyCard = (arr: any[] , height: string) => {
  const newArr = [];
  for (let i = arr.length; i < 4; i++) {
    newArr.push(<EmptyDiv key={i} height={height}></EmptyDiv>);
  }
  return newArr;
};
// height: 375px;
const EmptyDiv = styled.div<{ height?: string}>`
  height: ${(props) => props.height}px;
`;