import { darkgrayFont, blackFont, mainFont } from './../../../../../styles/fontColor';
import styled from 'styled-components';

import { MapIcon, GridDotIcon } from '../../../../../styles/icons';

export const MapAndGrid = styled.div`
    display: flex;
    align-items: center;
    height: 40px;

    @media screen and (max-width: 700px) {
        flex-basis: 20%;
    }
`

export const IconBtn = styled.button`
    margin-left: 1em;
`

export const Map = styled(MapIcon)<{ active: number }>`
    font-size: 2rem;
    color: ${(props) => props.active ? mainFont : blackFont};
`

export const GridDot = styled(GridDotIcon)<{ active: number }>`
    font-size: 2rem;
    color: ${(props) => props.active ? blackFont : mainFont};
`