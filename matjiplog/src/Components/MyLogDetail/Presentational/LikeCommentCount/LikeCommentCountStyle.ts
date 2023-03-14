import styled from 'styled-components';

import { LikeIcon, CommentIcon } from '../../../../styles/icons';

export const LikeDiv = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`

export const CommentDiv = styled.div`
    display: flex;
    align-items: center;
`

export const Like = styled(LikeIcon)`
    font-size: 20px;
    margin-right: 5px;
`

export const LikeCount = styled.p`
    font-size: 20px;
`

export const Comment = styled(CommentIcon)`
    font-size: 20px;
    margin-right: 5px;
`

export const CommentCount = styled.p`
    font-size: 20px;
`

export const LikeCommentCountArticle = styled.article`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10em 0 10em;
    height: 50px;

    @media screen and (max-width: 800px) {
        justify-content: space-around;
    }
`