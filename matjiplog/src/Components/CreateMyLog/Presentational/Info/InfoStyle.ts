import { hoverFont, mainFont, darkgrayFont } from './../../../../styles/fontColor';
import styled from 'styled-components';

import { SearchIcon } from '../../../../styles/icons';

export const TitleAndInput = styled.div`
    display: flex;
    align-items: center;
`

export const Title = styled.p`
    font-size: 1.5rem;

    ::after{
        content: " : ";
    }
`

export const Input = styled.input`
    flex: 1;
    height: 30px;
    margin: 0 0 0 1em;

    :focus{
        background-color: ${hoverFont};
        outline: none;
        border: 1px solid ${darkgrayFont};
    }
`

export const HastagSelect = styled.select`
    flex: 1;
    height: 30px;
    margin: 0 0 0 1em;
`

export const HastagOption = styled.option`
    
`

export const Button = styled.button<{ active: number }>`
    display: ${(props) => props.active ? "block" : "none"};
    margin: 0 0 0 1em;

    :hover{
        color: ${mainFont};
    }
`
export const Search = styled(SearchIcon)`
    font-size: 2rem;
`