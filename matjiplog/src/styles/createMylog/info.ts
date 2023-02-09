import styled from "styled-components";

import { FaRegMap } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";

export const InfoDiv = styled.article`
  flex: 1 1 50%;
  border: 1px solid darkgray;
  display: flex;
  flex-direction: column;
  padding: 10em 10em 10em 10em;
`;

export const FindMap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10em;
`;
export const FindMapTitle = styled.label`
  font-size: 1.5rem;
  cursor: pointer;
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
export const DisclosureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: normal;
`;
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
  counter-reset: green;
  border-radius: 23px;
`;
// 공개 여부
export const Scope = styled(FindMap)`
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`;
export const ScopeTitle = styled(FindMapTitle)`
  cursor: Default;
`;
export const ScopeItems = styled.ul`
  display: flex;
  flex-direction: column;
  border-top: 1px solid darkgray;
  border-bottom: 1px solid darkgray;
  width: 100%;
  margin: 5em 0 5em 0;
`;
export const ScopteItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 3em;
`;
export const ScopeItemTitleDiv = styled.div`
  width: 30%;
  text-align: center;
`;
export const ScopeItemTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: normal;
`;
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
export const OptionsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 2em;
  cursor: Default;
`;
export const ScopeAndOptions = styled.div``;
//  옵션
