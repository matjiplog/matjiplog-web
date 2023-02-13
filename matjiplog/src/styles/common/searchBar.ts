import styled from "styled-components";

import { BiSearch } from "react-icons/bi";

export const SearchBarDiv = styled.article`
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

export const SearchInputAndHastag = styled.div<{ visibled?: string }>`
  display: flex;
  flex-direction: column;
  flex: 1 1 85%;
  margin-left: 10px;
  border-collapse: collapse;
  visibility: ${(props) => props.visibled || "inherit"};
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-radius: 5px;
`;
export const SearchInput = styled.input`
  flex: 1;
  border: none;
  border-left: 1px solid black;
  border-radius: 5px;
  padding: 11px;
  &:focus {
    outline: none;
  }
`;
export const SearchIcon = styled(BiSearch)`
  padding: 6px;
  color: darkgray;
  cursor: pointer;
`;

export const HasTag = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 4em;
`;
export const HasTagItem = styled.li`
  margin-right: 2em;
  color: darkgray;
  cursor: pointer;
  &::before {
    content: "#";
  }
  &:hover {
    color: blue;
    transform: scale(1.2);
  }
`;
