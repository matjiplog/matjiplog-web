import { blackFont, redFont } from './../../../../styles/fontColor';
import styled from 'styled-components';

import { LikeIcon, WriteIcon } from '../../../../styles/icons';
import { mainFont } from '../../../../styles/fontColor';

const IconStlye = `
    font-size: 1.5rem;
    color: ${blackFont};
    transition: all 250ms ease-in-out;

    &:hover {
        transform: scale(1.2);
    }
`

export const LikeAndWrtieButton = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 3em 0 0 0;
`

export const Button = styled.button`

`

export const Like = styled(LikeIcon)`
    ${IconStlye};

    :hover{
        color: ${redFont};
    }
`

export const Write = styled(WriteIcon)`
    ${IconStlye};

    :hover{
        color: ${mainFont};
    }

`