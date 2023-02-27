import styled from "styled-components";

import { BiSearch } from "react-icons/bi";

export const SearchBarDiv = styled.article`
  display: flex;
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

export const SubmitBtn = styled.button``;

export const SearchIcon = styled(BiSearch)`
  padding: 6px;
  color: darkgray;
  cursor: pointer;
`;

export const HasTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 4em 0 4em 0;
  white-space : nowrap;

  .active{
    background-color: #ff6701;
    color: white;
    justify-self: flex-start;
    order: 0;
  }
`;

export const HasTagItem = styled.li`
  margin: 2em;
  background-color: white;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 18.5px;
  cursor: pointer;
  padding: 10px;
  order: 1;

  &::before {
    content: "#";
  }
  &:hover {
    transform: scale(1.2);
  }
  
`;
export const SearchInputAndHastag = styled.div<{ visibled?: string }>`
  display: flex;
  flex-direction: column;
  flex: 1 1 85%;
  width: 85%;
  margin-left: 10px;
  visibility: ${(props) => props.visibled || "inherit"};

  @media screen and (max-width: 800px) {
    ${HasTags}{
      flex-wrap: nowrap;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;