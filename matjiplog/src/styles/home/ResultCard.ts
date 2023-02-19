import styled from 'styled-components';

import { FaHeart } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";

export const Result = styled.div`
  padding: 10px;
  border: solid #b4b4b4 1px;
  border-radius: 6px;
  box-shadow: 0px 0px 10px 3px rgba(190, 190, 190, 0.6);
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
export const ResultImg = styled.img`
  width: 100%;
`;
// export const Like = styled(FaHeart)`
//   font-size: 20px;
//   position: absolute;
//   top: 1em;
//   right: 1em;
//   color: red;
// `;
export const TitleAndScope = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  .on {
    color: #ffd400;
  }
  .off {
    color: darkgray;
  }
`;
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
export const Star = styled(ImStarFull)`
  font-size: 15px;
  cursor: pointer;
`;
export const Address = styled.p`
  margin-top: 5px;
  color: darkgray;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;