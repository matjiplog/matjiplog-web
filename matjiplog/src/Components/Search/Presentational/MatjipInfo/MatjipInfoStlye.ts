import styled from 'styled-components';

import { darkgrayFont, mainFont, yellowFont } from '../../../../styles/fontColor';
import { StarIcon } from '../../../../styles/icons';

export const Category = styled.span`
  font-size: 1.5rem;
  color: ${mainFont};
`;

export const TitleAndScope = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`;

export const Title = styled.p`
    flex: 1;
    font-size: 1.5rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 10px;
`;

export const NumberAndStar = styled.div`
    display: flex;
    align-items: center;
`;

export const ScopeNumber = styled.h3`
    margin-right: 5px;
    font-size: 15px;
`;

export const Star = styled(StarIcon)<{ active: number }>`
    font-size: 15px;
    cursor: pointer;
    color: ${(props) => props.active ? yellowFont : darkgrayFont};
`;

export const Address = styled.p`
  font-size: 1.5rem;
  margin-top: 5px;
  color: ${darkgrayFont};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;