import styled from "styled-components";


export const ImgAndContent = styled.div`
    display: flex;
    height: 700px;
    padding: 0 10em 0 10em;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        padding: 0em
    }
`;

export const UserAndContent = styled.div`
    flex: 1 1 60%;
    display: flex;
    flex-direction: column;
    padding: 0 7em 0 7em;

    @media screen and (max-width: 800px) {
        padding: 0em;
        flex: 1 1 100%;
    }
`;

export const ContentAndRating = styled.div`
    flex: 1 1 90%;
    overflow: auto;
`

export const CommentItems = styled.div<{ emojiActive: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 450px;
    padding: 5em 5em 5em 5em;
    overflow: auto;
    border-bottom: 1px solid darkgray;
    border-top: 1px solid darkgray;
    margin-left: ${(props) => props.emojiActive ? 250 : 0}px;

    @media screen and (max-width: 800px) {
        height: 300px;
        margin-left: 0px;
    }
`;

export const InfoSection = styled.section`
    margin: 0em 5em 0 5em;
`;
