import styled from "styled-components";

import { hoverFont, darkgrayFont, mainFont } from './../../../../styles/fontColor';
import { ImogeIcon } from './../../../../styles/icons';

export const DetailDiv = styled.div`
  flex: 1 1 20%;
  margin: 5em 0 5em 0;
  display: flex;
  border: 1px solid ${darkgrayFont};

  @media screen and (max-width: 700px) {
    margin: 0 0 0 0;
  }
`;

export const DetailImogeDiv = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  padding: 3em;
`;

export const DetailImoge = styled(ImogeIcon)``;

export const DetailInput = styled.textarea`
  flex: 1 1 90%;
  border: none;
  padding: 1em;
  font-size: 1.5rem;
  resize: none;

  &:focus {
    outline: none;
    background-color: ${hoverFont};
  }
`;

export const SubmitBtn = styled.input`
  width: 100px;
  border: none;
  cursor: pointer;
  background: transparent;

  &:hover {
    color: ${mainFont};
  }
`;
