import styled from "styled-components";

export const DropBarDiv = styled.div<{ visibled?: string }>`
  position: relative;
  flex-basis: 10%;
  visibility: ${(props) => props.visibled || "inherit"};

  @media screen and (max-width: 700px) {
    flex-basis: 20%;
  }
`;

