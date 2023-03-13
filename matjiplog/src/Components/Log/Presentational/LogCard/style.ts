import styled from "styled-components";
import { CardBorderShaodw } from "../../../../styles/borderStyle";
import { BackgroundImgDiv, ProfileImgDiv, SkipTextDiv } from "../../../../styles/divStyle";
import { FlexRowAlignCenter, FlexColumn, FlexRow } from "../../../../styles/flexStyle";
import { mainFont } from "../../../../styles/fontColor";

export const CardDiv = styled(CardBorderShaodw)`
  height: 375px;
`;

export const LogImgDiv = styled(BackgroundImgDiv)`
  width: auto;
  height: 200px;
  margin: 10px;
  border: solid #b4b4b4 1px;
  border-radius: 6px;
`

export const ContentTopDiv = styled(FlexRowAlignCenter)`
  margin : 10px 20px 10px 20px;
`

export const ProfileImg = styled(ProfileImgDiv)`
  width: 35px;
  height: 35px;
`;

export const TopTextDiv = styled(FlexColumn)`
  margin-left : 10px;
`

export const DotDiv = styled.div`
  margin-left: auto;
`

export const ContentDiv = styled.div`
  margin : 10px 20px 10px 20px;
`;

export const RNameDiv =styled.div`
  color: ${mainFont};
  font-size: 14px;
  font-weight: bold;
`;

export const ReviewDiv = styled(SkipTextDiv)`
  display: block;
  width: 210px;
  margin-top: 10px;
`

export const EmoticonDiv = styled(FlexRow)`
  width: 100%;
  justify-content: flex-start;
  padding: 10px 20px 10px 20px;
`;

