import styled from 'styled-components';

import { FaRegHeart, FaRegCommentDots } from "react-icons/fa";

export const LikeDiv = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`
export const CommentDiv = styled.div`
    display: flex;
    align-items: center;
`
export const LikeIcon = styled(FaRegHeart)`
    font-size: 20px;
    margin-right: 5px;
`
export const LikeCount = styled.p`
    font-size: 20px;
`
export const CommentIcon = styled(FaRegCommentDots)`
    font-size: 20px;
    margin-right: 5px;
`
export const CommentCount = styled.p`
    font-size: 20px;
`