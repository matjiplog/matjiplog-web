import styled from "styled-components";
import { BackgroundImgDiv } from "../../../../styles/divStyle";
import { FlexColumn, FlexRow } from "../../../../styles/flexStyle";
import { mainFont } from "../../../../styles/fontColor";

export const MenuPrice = styled.div`
  color: ${mainFont};
`;

export const MenuInfo = styled(FlexColumn)`
  justify-content: space-around;
  margin-left: 10px;
  font-size: 13px;
  font-weight: 700;
`;

export const MenuImg = styled(BackgroundImgDiv)`
  width: 100px;
  height: 100px;
`;

export const MenuContent = styled(FlexRow)`
  display: flex;
`;

export const Wrap = styled.div`
  border : 1px solid rgb(219,219,219);
  border-radius: 5px;
  padding: 20px 10px 20px 10px;
`;
