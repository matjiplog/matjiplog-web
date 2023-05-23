import styled from "styled-components";

export const HasTagUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 4em 0 4em 0;
  white-space: nowrap;

  @media screen and (max-width: 700px) {
    height: 120px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;