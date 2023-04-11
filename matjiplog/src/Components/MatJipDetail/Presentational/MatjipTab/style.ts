import styled from "styled-components";
import { FlexRow } from "../../../../styles/flexStyle";

export const TabContent = styled.div`
  padding: 0 20px 0 20px;
`;

export const TabWrap = styled.div`
  position: relative;
  margin : 70px 20% 50px 20%;
  background-color: white;
  border: 1px solid rgb(219,219,219);
  border-radius: 1px;

  @media screen and (max-width: 900px) {
    margin : 20px 20px 50px 20px;
  }
`;

export const TabDiv = styled(FlexRow)`
  font-weight: 700;
  font-size: 16px;
  position: absolute;
  top: -42px;
  left: -6px;
  margin: 0 5px 0 5px;
  width: 100%;
`;

export const TabLi = styled.div<{ focus?: string }>`
  padding : 10px 0 10px 0;
  flex: 1 1 33%;
  text-align: center;
  border : ${(props) => props.focus === "isactive" ? "1px solid rgb(219,219,219)" : ""};
  border-bottom : ${(props) => props.focus === "isactive" ? "none" : ""};
  background-color: ${(props) => props.focus === "isactive" ? "white" : ""};
  border-radius: 2px;
`;