import styled from 'styled-components';

import { ImogeIcon } from './../../../../styles/icons';

export const Form = styled.form`
    position: relative;
    height: 100px;
    display: flex;
`;

export const ImogeDiv = styled.div`
    width: 50px;
    display: flex;
    justify-content: center;
    padding: 3em;
`;  

export const Imoge = styled(ImogeIcon)`
    font-size: 2rem;
`;  

export const Input = styled.textarea`
    flex: 1 1 90%;
    border: none;
    padding: 1em;
    font-size: 1.5rem;
    resize: none;

    &:focus {
        outline: none;
        background-color: #f4f4f4;
    }
`;  

export const SubmitBtn = styled.input`
    width: 100px;
    border: none;
    cursor: pointer;
    background: transparent;

    &:hover {
        color: #ff6701;
    }
`;



