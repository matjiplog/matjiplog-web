import styled from 'styled-components';

export const MyLogSection = styled.section`
    display: flex;
    min-height: 100%;
    flex-direction: column;
    margin: 50px 50px 50px 50px;

    @media screen and (max-width: 700px) {
        margin: 20px;
    }
`;