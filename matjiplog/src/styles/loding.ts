import styled from "styled-components";

import FadeLoader from "react-spinners/FadeLoader";

export const Lodingdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const LodingIcon = styled(FadeLoader)`
  color: #ff6701;
  height: 15;
  width: 5;
  border-radius: 2;
  margin: 2;
`;
