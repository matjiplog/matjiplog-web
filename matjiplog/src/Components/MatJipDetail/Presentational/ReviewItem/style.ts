import styled from "styled-components";
import { ProfileImgDiv } from "../../../../styles/divStyle";
import { FlexColumn, FlexRowAlignCenter, FlexRowBetweenCenter } from "../../../../styles/flexStyle";


export const ReviewTop =styled(FlexRowBetweenCenter)`
`;

export const StarItem = styled(FlexRowAlignCenter)`
`;

export const ReviewContent = styled(FlexColumn)`
  margin-top: 10px;
`;
export const UserP = styled.p`
  font-size: 12px;
  font-weight: 700;
`;
export const UserImg = styled(ProfileImgDiv)`
  width: 36px;
  height: 36px;
  margin-right : 8px;
`;

export const Wrap = styled(FlexColumn)`
  padding: 20px 10px 20px 10px;
  border-bottom : 1px solid rgb(219,219,219);
  cursor: pointer;

  &:hover {
    background-color : rgb(235,235,235);
  }
`;

export const UserDiv = styled(FlexRowAlignCenter)`
`;

export const ReviewSeeMore = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin : 20px 0 20px 0;
  text-align: center;
  cursor: pointer;
`;