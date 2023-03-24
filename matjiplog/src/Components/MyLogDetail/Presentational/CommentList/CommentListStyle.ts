import { TrashIcon } from './../../../../styles/icons';
import styled from 'styled-components';

import { darkgrayFont, mainFont } from './../../../../styles/fontColor';
import { CardBorderShaodw } from './../../../../styles/borderStyle';

export const CommentDiv = styled(CardBorderShaodw)`
    display: flex;
    position: relative;
    border-bottom: 1px solid ${darkgrayFont};
    padding: 1em 8em 1em 1em;
    margin: 0 0 3em 0;
`

export const CommentImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 1em 0 0;
`

export const CommentInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const CommentNickNameAndTime = styled.div`
    display: flex;
    margin: 0 0 1.5em 0;
`

export const CommentContent = styled.div``

export const CommentNickName = styled.p`
    margin: 0 1.5em 0 0;
`

export const DeleteCommentButton = styled.button<{ active: number }>`
    position: absolute;
    right: 7px;
    top: 10px;
    display: ${(props) => props.active ? "block" : "none"};
`

export const TrashButton = styled(TrashIcon)`

    :hover{
        color: ${mainFont};
        transform: scale(1.2);
        transition: all 0.1s ;
    }
`