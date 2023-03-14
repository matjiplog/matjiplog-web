import { darkgrayFont, blackFont } from './../../../../../styles/fontColor';
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

export const Map = styled(MapIcon)`
    font-size: 3rem;
    color: ${blackFont};
`

export const GridDot = styled(GridDotIcon)`
    font-size: 3rem;
    color: ${blackFont};
`