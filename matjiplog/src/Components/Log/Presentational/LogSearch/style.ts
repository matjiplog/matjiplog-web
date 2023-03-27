import styled from "styled-components";
import { FlexRow, FlexRowCenterCenter } from "../../../../styles/flexStyle";
import { darkgrayFont } from "../../../../styles/fontColor";

export const MenuCategory = styled(FlexRowCenterCenter)`
  position: relative;
  border: 1px solid rgb(197, 197, 197);
  border-radius: 0.25rem;
  width: 120px;
  height: 50px;
  margin-right: 10px;
  font-size: 13px;
`;


export const IconDiv = styled.div`
  position: absolute;
  top: 13px;
  left: 600px;
`;
export const SearchForm = styled(FlexRow)`
  position: relative;
  width: 100%;
  height: 50px;
`;

export const LogInputSearch = styled.input`
  padding: 0px 50px 0px 30px;
  width: 520px;
  height: 50px;
  border: 1px solid rgb(197, 197, 197);
  border-radius: 0.25rem;
  outline: none;
  appearance: none;
  
  ::placeholder {
  color: ${darkgrayFont};
}
`