import styled from "styled-components";

import { darkgrayFont } from '../../../styles/fontColor';

export const CreateMyLogForm = styled.form`
    width: 70%;
    align-self: center;
    flex: 1;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 700px) {
        width: 60%;
    }
`;

export const ImageDiv = styled.article`
    flex: 1 1 50%;
    border: 1px solid ${darkgrayFont};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
`;

export const InfoDiv = styled.article`
    flex: 1 1 50%;
    border: 1px solid ${darkgrayFont};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding : 0 5em 0 5em;
`;

export const ScopeAndOptions = styled.div``;

export const ImgaeAndInfo = styled.div`
    display: flex;
    flex: 1 1 75%;

    @media screen and (max-width: 700px) {
        flex-direction: column;

        ${ScopeAndOptions} {
        display: flex;
        }
    }
`;