import styled from "styled-components";

import { FaRegSmile } from "react-icons/fa";

export const AddCommentImogeDiv = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  padding: 3em;
`;
export const AddCommentImoge = styled(FaRegSmile)`
    font-size: 2rem;
`;
export const AddCommentInput = styled.textarea`
  flex: 1 1 90%;
  border: none;
  padding: 1em;
  font-size: 1.5rem;
  resize: none;

  &:focus {
    outline: none;
    background-color: #f4f4f4;
  }
`;
export const AddCommentSubmitBtn = styled.input`
  width: 100px;
  border: none;
  cursor: pointer;
  background: transparent;
  &:hover {
    color: #ff6701;
  }
`;