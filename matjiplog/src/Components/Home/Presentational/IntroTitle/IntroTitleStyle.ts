import styled from "styled-components";

import { blackFont, mainFont, whiteFont } from '../../../../styles/fontColor';

export const Title = styled.h1`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 3rem;
  line-height: 2;
  color: ${whiteFont};
  z-index: 999;

  @media screen and (max-width: 700px) {
    left: 28%;
    font-size: 2rem;
  }
`;
