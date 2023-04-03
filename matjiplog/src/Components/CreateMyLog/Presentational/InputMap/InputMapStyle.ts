import styled from "styled-components";

import { mainFont, darkgrayFont } from '../../../../styles/fontColor';
import { MapIcon, WriteIcon } from '../../../../styles/icons';

export const FindMap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 5em 0;
`;

export const WriteAndMap = styled.div`

`

export const FindMapTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: normal;
`;


const IconStlye = `
    cursor: pointer;
    font-size: 2.5rem;
`

export const FindMapIcon = styled(MapIcon)<{ active: number }>`
    ${IconStlye};
    color: ${(props) => props.active ? mainFont : darkgrayFont};
`;

export const Write = styled(WriteIcon)<{ active: number }>`
    ${IconStlye};
    color: ${(props) => props.active ? mainFont : darkgrayFont};
    margin: 0 1em 0 0;
`