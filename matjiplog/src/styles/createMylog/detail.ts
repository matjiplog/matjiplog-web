import styled from "styled-components";

import { FaRegSmile } from "react-icons/fa";

export const DetailDiv = styled.article`
  flex: 1 1 20%;
  margin: 5em 0 5em 0;
  display: flex;
  border: 1px solid darkgray;
`;
export const DetailImogeDiv = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  padding: 3em;
`;
export const DetailImoge = styled(FaRegSmile)``;
export const DetailInput = styled.textarea`
  flex: 1 1 70%;
  border: none;
  padding: 1em;
  font-size: 1.5rem;
  resize: none;

  &:focus {
    outline: none;
    background-color: #f4f4f4;
  }
`;
export const SubmitBtn = styled.input`
  width: 100px;
  border: none;
  cursor: pointer;
  background: transparent;
  &:hover {
    color: #ff6701;
  }
`;
