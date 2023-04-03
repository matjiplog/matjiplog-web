import styled from 'styled-components';

import { hoverFont } from '../../../../styles/fontColor';

export const MatjipItemImgDiv = styled.div`
    background-color: ${hoverFont};
    border-radius: 6px;
`

export const MatjipItemImg = styled.img`
    object-fit: contain;
    width: 100%;
    height: 250px;
    border-radius: 6px;
`