import styled from 'styled-components';

export const CommentDiv = styled.div`
    display: flex;
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
export const CommentTime = styled.p`
    ::after{
        content: "시간 전";
        color: darkgray;
    }
`



