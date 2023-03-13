import styled from "styled-components";

import { mainFont, blackFont, whiteFont } from '../../../../../styles/fontColor';
import { MenuBarIcon } from '../../../../../styles/icons';

export const LoginBtn = styled.button`
  color: ${blackFont};

  &:hover {
    transform: scale(1.2);
    color: ${mainFont};
  }
`;

export const MenuBar = styled(MenuBarIcon)`
  display: none;
  color: ${mainFont};
  position: absolute;
  right: 5em;
  top: 4.5em;
  cursor: Pointer;

  @media screen and (max-width: 700px) {
      display: block;
  }
`;

export const LoginDiv = styled.div<{ show: boolean }>`

    @media screen and (max-width: 700px) {
        width: 100%;
        text-align: center;
        display: none;
        border-radius: 5px;
        display: ${(props) => props.show ? "none" : "block"};

        ${LoginBtn} {
            padding: 1.2em;
        }
        
        &:hover {
            background-color: ${mainFont};

            ${LoginBtn} {
              color: ${whiteFont};
              transform: scale(1.2);
            }
        }
    }
`;

