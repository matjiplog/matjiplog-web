import styled from 'styled-components';
import { mainFont } from '../../../../styles/fontColor';

export const DaumSearchAddressArticle = styled.article`
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    transform: translate(-50%, -50%);
    padding: 7px;
    z-index: 999999; 
`

export const CloseButton = styled.button`
    width: 100%;
    background-color: ${mainFont};
`