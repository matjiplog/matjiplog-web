import styled from "styled-components";

import { BiSearch } from "react-icons/bi";

export const SearchBarDiv = styled.article`
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

export const SearchInputAndHastags = styled.div``;
export const DropBarDiv = styled.div<{ visibled?: string }>`
  position: relative;
  flex: 1 1 15%;

  &:hover {
    ul {
      display: block;
    }
  }
  visibility: ${(props) => props.visibled || "inherit"};
`;
export const Category = styled.span`
  position: absolute;
  background-color: white;
  color: #ff6701;
  top: -8px;
  left: 6px;
  font-size: 0.5rem;
  z-index: 999;
`;

export const DropBar = styled.div`
  padding: 3em 2em 3em 2em;
  border: 1px solid #6750a4;
  border-radius: 5px;
`;
export const DropItems = styled.ul`
  display: none;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin-top: 2px;
`;
export const DropItem = styled.li`
  width: 100%;
  padding: 3em 2em 3em 2em;
  &:hover {
    background-color: #f3edf7;
  }
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
