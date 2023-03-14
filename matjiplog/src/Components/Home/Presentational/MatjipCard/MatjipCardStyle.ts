import styled from 'styled-components';

import { StarIcon } from '../../../../styles/icons';
import { hoverFont, darkgrayFont, yellowFont, mainFont } from '../../../../styles/fontColor';
import { CardBorderShaodw } from '../../../../styles/borderStyle';

export const MatjipCardDiv = styled(CardBorderShaodw)`
  padding: 3em 5em 3em 5em;
  margin: 0 0 5em 0;
  
  &:hover {
    background-color: ${hoverFont};
  }
`

export const NameAndCategory = styled.div`
  display: flex;
  align-items: center;
`

export const Name = styled.h3`
  margin-right: 0.5em;
  font-size: 3em;
`

export const Category = styled.span`
  color: ${mainFont};
`

export const Address = styled.p`
  margin-top: 1em;
  color: ${darkgrayFont};
`

export const ImageDiv = styled.div`
  margin: 1em 0 1em 0;
`

export const Image = styled.img`
  width: 50px;
  height: 50px;
`

export const Title = styled.div`
  flex: 1;
  font-size: 15px;
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

export const Star = styled(StarIcon)<{ active: boolean }>`
  font-size: 15px;
  cursor: pointer;
  color: ${(props) => props.active ? yellowFont : darkgrayFont};
`;