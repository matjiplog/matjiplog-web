import styled from "styled-components";

export const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8em 0 0em;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
`;