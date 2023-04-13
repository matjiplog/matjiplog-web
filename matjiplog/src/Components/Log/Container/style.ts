import styled from "styled-components";
import { FlexRowCenterCenter } from "../../../styles/flexStyle";

export const LogGrid = styled.div`
  padding-top : 5%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  place-content: center center;
  grid-gap: 50px;
`;
// grid-template-columns: repeat(auto-fit, 320px);

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  margin : 2% 10% 0 10%;
`;

export const NonSearchDiv = styled(FlexRowCenterCenter)`
  height: 200px;
  font-size: 22px;
  font-weight: 700;
`