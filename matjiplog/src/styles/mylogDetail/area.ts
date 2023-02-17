import styled from 'styled-components';

export const InfoSection = styled.section`
    margin: 0em 5em 0 5em;
`;

export const ImgAndInfo = styled.div`
    display: flex;
    height: 700px;
    padding: 0 10em 0 10em;

    @media screen and (max-width: 800px) {
        &{
            flex-direction: column;
            padding: 0em
        }
    }
`;
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
export const CommentArticle = styled.article`
    height: 450px;
    padding: 5em 5em 5em 5em;
    overflow: auto;
    border-bottom: 1px solid darkgray;
    border-top: 1px solid darkgray;

    @media screen and (max-width: 800px) {
        &{
            height: 300px;
        }
    }
`;
export const AddCommentArticle = styled.article`
    height: 100px;
    display: flex;
`;

export const ImgArticle = styled.article`
    flex: 1 1 40%;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 800px) {
        &{
            flex: 1 1 100%;
        }
    }
`;
export const InfoArticle = styled.article`
    flex: 1 1 60%;
    display: flex;
    flex-direction: column;
    padding: 0 7em 0 7em;

    @media screen and (max-width: 800px) {
        &{
            padding: 0em;
            flex: 1 1 100%;
        }
    }
`;

