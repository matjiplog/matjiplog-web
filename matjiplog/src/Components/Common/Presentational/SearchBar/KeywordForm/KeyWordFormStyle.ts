import styled from "styled-components";

import { SearchIcon } from '../../../../../styles/icons';
import { darkgrayFont } from '../../../../../styles/fontColor';

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

export const Search = styled(SearchIcon)`
  padding: 6px;
  color: ${darkgrayFont};
  cursor: pointer;
`;