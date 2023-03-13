import styled from 'styled-components';

import { mainFont, hoverFont } from '../../../../styles/fontColor';
import { SearchIcon } from '../../../../styles/icons';

export const Title = styled.h1`
    text-align: center;
    font-size: 5em;
    color: ${mainFont};
    margin: 1em 0 1em 0;
`
export const RadiusInputForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CurrentRadius = styled.p`
    font-size: 3em;
    ::after{
        content: "Km";
    }
    ::before{
        content: "반경 : ";
    }
`
export const Input = styled.input`
    border: none;
    border-radius: 10px;
    padding: 1em;
    margin: 0 1em 0 1em;

    &:focus {
        outline: none;
        background-color: ${hoverFont};
    }
`
export const InquireBtn = styled.button`
    border: none;
    background-color: white;
    cursor: pointer;
    background: transparent;

    &:hover {
        color: ${mainFont};
    }
`
export const InquireIcon = styled(SearchIcon)`
`