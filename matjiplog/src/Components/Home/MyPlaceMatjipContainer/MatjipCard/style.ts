import { ImStarFull } from 'react-icons/im';

import styled from 'styled-components';

export const MatjipCardDiv = styled.div`
  padding: 3em 5em 3em 5em;
  border-bottom: 1px solid darkgray; 

  &:hover {
    background-color: #f4f4f4;
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
  color: darkgray;
`
export const Address = styled.p`
  margin-top: 1em;
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
  .on {
    color: #ffd400;
  }
  .off {
    color: darkgray;
  }
`;
export const ScopeNumber = styled.h3`
  margin-right: 5px;
  font-size: 15px;
`;
export const Star = styled(ImStarFull)`
  font-size: 15px;
  cursor: pointer;
`;