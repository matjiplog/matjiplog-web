import styled from "styled-components";

import { darkgrayFont, yellowFont } from '../../../../styles/fontColor';
import { StarIcon } from '../../../../styles/icons'

export const Scope = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 5em 0;

    @media screen and (max-width: 700px) {
        flex: 1 1 70%;
        margin: 0 5em 0 0;
    }
`;

export const ScopeTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: normal;
`;

export const ScopeItems = styled.ul`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 5em 0 0em 0;
    border-top: 1px solid ${darkgrayFont};
    border-bottom: 1px solid ${darkgrayFont};
`;

export const ScopteItem = styled.li`
    display: flex;
    margin: 2.5em 0 2.5em 0;
    justify-content: space-between;
    align-items: center;
`;

export const ScopeItemTitleDiv = styled.div`
    width: 32%;
    text-align: center;
`;

export const ScopeItemTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: normal;
`;

export const ScopeStars = styled.div`
    
`;

export const Star = styled(StarIcon)<{ active: number }>`
    font-size: 2rem;
    cursor: pointer;
    color: ${(props) => props.active ? yellowFont : darkgrayFont};
`;