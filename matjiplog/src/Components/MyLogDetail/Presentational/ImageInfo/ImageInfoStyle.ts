import styled from "styled-components";

import { mainFont } from './../../../../styles/fontColor';
import { LeftIcon, RightIcon } from '../../../../styles/icons';

export const ImagesDiv = styled.div<{ slideIndex: number; length: number }>`
    width: ${(props) => 100 * props.length}%;
    height: 100%;
    transition: all 500ms ease-in-out;
    transform: translateX(${(props) => -1 * ((100 / props.length) * props.slideIndex)}%);
`;

export const Image = styled.img<{ length: number }>`
    width: ${(props) => 100 / props.length}%;
    height: 100%;
    border-radius: 10px;
`;

export const SlideLeftBtn = styled(LeftIcon)`
    position: absolute;
    top: 50%;
    left: 0.5em;
    font-size: 5em;
    color: ${mainFont};
    cursor: Pointer;
    z-index: 999;
`;

export const SlideRightBtn = styled(RightIcon)`
    position: absolute;
    font-size: 5em;
    color: ${mainFont};
    top: 50%;
    right: 0.5em;
    cursor: Pointer;
    z-index: 999;
`;

export const ImgArticle = styled.article`
    flex: 1 1 40%;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 800px) {
        flex: 1 1 100%;
    }
`;
