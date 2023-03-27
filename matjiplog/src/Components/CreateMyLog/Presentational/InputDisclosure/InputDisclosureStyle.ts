import styled from "styled-components";

import { darkgrayFont, mainFont, whiteFont } from '../../../../styles/fontColor';

export const Disclosure = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 5em 0;
`;

export const DisclosureTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: normal;
`;

export const DisclosureCheckDiv = styled.div<{ active: number }>`
    width: 60px;
    height: 30px;
    border-radius: 100px;
    padding: 0 1em 0 1em;
    display: flex;
    align-items: center;
    transition: all 500ms ease-in-out;
    cursor: pointer;
    background-color: ${(props) => props.active ? mainFont : darkgrayFont};
    justify-content: ${(props) => props.active ? "flex-end" : "flex-start"};
`;

export const DisclosureCheck = styled.div`
    width: 24px;
    height: 24px;
    background-color: ${whiteFont};
    border-radius: 23px;
`;