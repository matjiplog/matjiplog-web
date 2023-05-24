import styled from 'styled-components';

export const MatjipItemImgDiv = styled.div<{ src: string }>`
    height: 150px;
    background-image: url(${(props) => props.src});
    background-size: 100% 100%;
    border-radius: 6px;
`;