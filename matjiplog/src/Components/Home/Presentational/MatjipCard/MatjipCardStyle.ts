import styled from 'styled-components';

import { LikeIcon, StarIcon, WriteIcon } from '../../../../styles/icons';
import { hoverFont, darkgrayFont, yellowFont, mainFont, redFont } from '../../../../styles/fontColor';
import { CardBorderShaodw } from '../../../../styles/borderStyle';

export const MatjipCardDiv = styled(CardBorderShaodw)`
  font-size: 1rem;
  position: relative;
  padding: 1em 2em 1em 2em;
  margin: 0 0 1em 0;
  
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
  font-size: 1.5rem;
`

export const Category = styled.span`
  color: ${mainFont};
  font-size: 1rem;
`;

export const Address = styled.p`
  margin-top: 1em;
  color: ${darkgrayFont};
  font-size: 1rem;
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

export const Star = styled(StarIcon)<{ active: number }>`
  font-size: 15px;
  cursor: pointer;
  color: ${(props) => props.active ? yellowFont : darkgrayFont};
`;

export const Button = styled.button`
  font-size: 1.5rem;
`
const IconStyle = `
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
`

export const Like = styled(LikeIcon)`
  ${IconStyle};
  right: 2em;
  :hover{
    color: ${redFont};
    transform: scale(1.2);
  }
  
`
export const Wrtie = styled(WriteIcon)`
  ${IconStyle};
  right: 0.5em;
  :hover{
    color: ${mainFont};
    transform: scale(1.2);
  }
`