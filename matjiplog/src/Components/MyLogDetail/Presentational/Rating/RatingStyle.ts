import styled from 'styled-components';

import { darkgrayFont,yellowFont } from '../../../../styles/fontColor';
import { StarIcon } from '../../../../styles/icons';

export const Scope = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20em;
    padding: 0 5em 0 5em;
`;

export const ScopeItems = styled.ul`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const ScopeItemTitleDiv = styled.div`
    width: 60px;
    text-align: center;
`;

export const ScopteItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 3em;
`;

export const ScopeItemTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: normal;
`;

export const ScopeStars = styled.div`
    margin-left: 3em;
`;

export const Star = styled(StarIcon)<{ active: number }>`
    font-size: 2rem;
    color: ${(props) => props.active ? yellowFont : darkgrayFont};
`;