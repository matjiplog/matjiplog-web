import styled from "styled-components";

import { mainFont } from '../../../../styles/fontColor';
import { MapIcon } from '../../../../styles/icons';

export const FindMap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 5em 0;
`;

export const FindMapTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: normal;
  `;

export const FindMapIcon = styled(MapIcon)`
    cursor: pointer;

    &:hover {
      color: ${mainFont};
    }
`;