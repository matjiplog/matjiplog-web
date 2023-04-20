import styled from 'styled-components';
import { FlexRowCenterCenter } from '../../../styles/flexStyle';

export const MyLogSection = styled.section`
    display: flex;
    min-height: 100%;
    flex-direction: column;
    margin: 50px 50px 50px 50px;

    @media screen and (max-width: 700px) {
        margin: 20px;
    }
`;

export const NonSearchDiv = styled(FlexRowCenterCenter)`
    line-height: 6rem;
    text-align: center;
    height: 550px;
    font-size: 22px;
    font-weight: 700;
`