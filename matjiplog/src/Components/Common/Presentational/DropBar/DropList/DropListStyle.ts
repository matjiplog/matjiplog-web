import { blackFont } from './../../../../../styles/fontColor';
import styled from "styled-components";

import { whiteFont, mainFont, darkgrayFont } from '../../../../../styles/fontColor';

export const DropItems = styled.ul`
  position: absolute;
  width: 100%;
  border: 1px solid ${darkgrayFont};
  border-radius: 5px;
  z-index: 999;
`;

export const DropItem = styled.li<{ active: number }>`
  justify-content: center;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: ${whiteFont};
  font-size: 6.5px;
  color: ${(props) => (props.active ? mainFont : blackFont)};

  &:hover {
    color: ${mainFont};
  }
`;