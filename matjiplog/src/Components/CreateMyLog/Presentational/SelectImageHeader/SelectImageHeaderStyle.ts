import styled from "styled-components";

import { darkgrayFont, mainFont } from './../../../../styles/fontColor';
import { LeftIcon, RightIcon, DeleteIcon } from '../../../../styles/icons';
import { FlexRowCenterCenter } from './../../../../styles/flexStyle';

export const ImageTitleAndBtnDiv = styled(FlexRowCenterCenter)`
  height: 30px;
  border-bottom: 1px solid ${darkgrayFont};
`;

export const ImageTitle = styled.h3``;

export const SlideLeftBtn = styled(LeftIcon)`
  color: ${mainFont};
  cursor: Pointer;
  position: absolute;
  left: 2em;
`;

export const SlideRightBtn = styled(RightIcon)`
  color: ${mainFont};
  cursor: Pointer;
  position: absolute;
  right: 2em;
`;

export const DeleteBtn = styled(DeleteIcon)`
  color: ${mainFont};
  cursor: Pointer;
  position: absolute;
`;
