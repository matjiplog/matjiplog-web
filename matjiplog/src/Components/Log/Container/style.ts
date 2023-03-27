import styled from "styled-components";

export const LogGrid = styled.div`
  
  padding-top : 5%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  place-content: center center;
  grid-gap: 50px;
`;
// grid-template-columns: repeat(auto-fit, 320px);

export const Section = styled.div`
  margin : 2% 10% 0 10%;
`;