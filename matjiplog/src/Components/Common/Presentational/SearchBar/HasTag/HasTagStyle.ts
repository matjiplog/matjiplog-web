import styled from "styled-components";

import { blackFont, mainFont, whiteFont } from '../../../../../styles/fontColor';

export const HasTagItem = styled.li<{ active: boolean }>`
    margin: 2em;
    padding: 10px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    border-radius: 18.5px;
    background-color: ${(props) => props.active ? mainFont : whiteFont};
    color: ${(props) => props.active ? whiteFont : blackFont};
    order: ${(props) => props.active ? 0 : 1};
    cursor: pointer;

    &::before {
      content: "#";
    }
    &:hover {
      transform: scale(1.2);
    }
`;