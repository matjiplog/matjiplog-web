import styled from "styled-components";

import { mainFont } from '../../../../styles/fontColor';
import { LeftIcon, RightIcon } from '../../../../styles/icons';

export const SlideLeftBtn = styled(LeftIcon)`
  position: absolute;
  color: ${mainFont};
  top: 40%;
  left: 5em;
  cursor: Pointer;
  z-index: 999;
`;

export const SlideRightBtn = styled(RightIcon)`
  position: absolute;
  color: ${mainFont};
  top: 40%;
  right: 5em;
  cursor: Pointer;
  z-index: 999;
`;