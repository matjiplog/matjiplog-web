import styled from "styled-components";

import { FaRegMap } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";

export const InfoDiv = styled.article`
  flex: 1 1 50%;
  border: 1px solid darkgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding : 0 5em 0 5em;
`;

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
export const FindMapIcon = styled(FaRegMap)`
  cursor: pointer;
  &:hover {
    color: #ff6701;
  }
`;
//  지도
export const Disclosure = styled(FindMap)`
  .publicBg {
    background-color: #ff6701;
    justify-content: flex-end;
  }
  .privateBg {
    background-color: darkgray;
    justify-content: flex-start;
  }
  .public {
    background-color: white;
  }
  .private {
    background-color: white;
  }
`;
export const DisclosureTitle = styled(FindMapTitle)``;
export const DisclosureCheckDiv = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 100px;
  padding: 0 1em 0 1em;
  display: flex;
  align-items: center;
  transition: all 500ms ease-in-out;
  cursor: pointer;
`;
export const DisclosureCheck = styled.div`
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 23px;
`;
// 공개 여부
export const Scope = styled(FindMap)`
  flex-direction: column;
`;
export const ScopeTitle = styled(FindMapTitle)`
  width: 100%;
`;
export const ScopeItems = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 5em 0 0em 0;
  border-top: 1px solid darkgray;
  border-bottom: 1px solid darkgray;
`;
export const ScopteItem = styled.li`
  display: flex;
  margin: 2.5em 0 2.5em 0;
  justify-content: space-between;
  align-items: center;
`;
export const ScopeItemTitleDiv = styled.div`
  width: 30%;
  text-align: center;
`;
export const ScopeItemTitle = styled(FindMapTitle)``;
export const ScopeStars = styled.div`
  & .yellow {
    color: #ffd400;
  }
  & .darkgray {
    color: darkgray;
  }
`;
export const Star = styled(ImStarFull)`
  cursor: pointer;
`;
// 별점
export const OptionsDiv = styled.div``;
export const OptionsTitle = styled(FindMapTitle)`
  margin-bottom: 1em;
`;
export const ScopeAndOptions = styled.div``;
//  옵션
