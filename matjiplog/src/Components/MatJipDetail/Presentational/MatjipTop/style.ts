import styled from "styled-components";
import { BackgroundImgDiv } from "../../../../styles/divStyle";
import { FlexColumn, FlexColumnCenterCenter, FlexRow, FlexRowAlignCenter } from "../../../../styles/flexStyle";


export const IconDiv = styled(FlexColumnCenterCenter)`
  cursor: pointer;
`;

export const CenterIconDiv = styled(IconDiv)`
  margin : 0px 30px 0px 30px;
`;

export const TopIcon = styled(FlexRow)`
  margin-top: 20px;
`;

export const StarReviewDiv = styled(FlexRowAlignCenter)`
  margin-top: 10px;
`;

export const TopInfo = styled(FlexColumnCenterCenter)`
  margin-top: 10px;
`;

export const TopImg = styled(BackgroundImgDiv)`
  width: 300px;
  height: 200px;
  border-radius: 1px;
  margin: 0 auto;
`;

export const TopWrapDiv = styled.div`
  margin : 20px 20% 50px 20%;
  padding: 20px 0 20px 0;
  background-color: white;
  border: 1px solid rgb(219,219,219);
  border-radius: 1px;

  @media screen and (max-width: 900px) {
    margin : 20px 20px 50px 20px;
  }
`;