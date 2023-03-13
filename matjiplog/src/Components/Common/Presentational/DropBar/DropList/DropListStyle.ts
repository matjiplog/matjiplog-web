import styled from "styled-components";

import { whiteFont, mainFont, darkgrayFont } from '../../../../../styles/fontColor';

export const DropItems = styled.ul`
  position: absolute;
  width: 100%;
  border: 1px solid ${darkgrayFont};
  border-radius: 5px;
  z-index: 999;

  .select {
    color: ${mainFont};
  }
`;
export const DropItem = styled.li`
  width: 100%;
  padding: 3em 2em 3em 2em;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: ${whiteFont};
  
  &:hover {
    color: ${mainFont};
  }
`;