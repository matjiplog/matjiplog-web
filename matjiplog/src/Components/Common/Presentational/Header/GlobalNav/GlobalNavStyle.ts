import styled from "styled-components";

import { mainFont, blackFont, whiteFont } from '../../../../../styles/fontColor';

export const GnvItem = styled.li`
  padding: 4em 6em 4em 6em;
  border-radius: 5px;

  &:hover {
    button {
      transform: scale(1.2);
    }
  }
`;

export const GnvBtn = styled.button<{ active: number }>`
  color: ${(props) => props.active ? mainFont : blackFont};
`;

export const Gnv = styled.ul<{ active: boolean }>`
  display: flex;
  align-items: center;

  @media screen and (max-width: 700px) {
      flex-direction: column;
      width: 100%;
      align-items: center;
      display: ${(props) => props.active ? "flex" : "none"};

      ${GnvItem} {
        width: 100%;
        text-align: center;
      }

      & :hover {
        background-color: ${mainFont};
        
        ${GnvBtn} {
          color: ${whiteFont};
        }
      }
  }
`;