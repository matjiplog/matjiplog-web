import styled from 'styled-components';

import { StarIcon, LikeFullIcon } from '../../../../styles/icons';
import { redFont, darkgrayFont, yellowFont, mainFont, blackFont, hoverFont } from '../../../../styles/fontColor';
import { CardBorderShaodw } from '../../../../styles/borderStyle';

export const MatjipItem = styled(CardBorderShaodw)`
  position: relative;
  padding: 10px;
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MatjipItemImgDiv = styled.div`
    background-color: ${hoverFont};
    border-radius: 6px;
`
export const MatjipItemImg = styled.img`
    object-fit: contain;
    width: 100%;
    height: 250px;
    border-radius: 6px;
`

export const Like = styled(LikeFullIcon)`
  font-size: 20px;
  position: absolute;
  top: 1em;
  right: 1em;
  color: ${redFont};
`;

export const Category = styled.span`
  color: ${mainFont};
`

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
  margin-top: 5px;
  color: ${darkgrayFont};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;