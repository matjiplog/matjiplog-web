import styled from "styled-components";
import { BsMap } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";

import { SearchBarDiv } from "../../styles/common/searchBar";
import MyLogSearchBar from "./MyLogSearchBar";
import { showLogStore } from "../../stores/mylog/store";



function SelectLogView() {
  const { mapShow, setMapShow} = showLogStore();
  return(
    <LogViewDiv>
      <SearchBarDiv>
        {mapShow ? <MyLogSearchBar visible="hidden"></MyLogSearchBar>:
          <MyLogSearchBar visible="inherit"></MyLogSearchBar>}
        <SelectViewDiv>
          <BsMap size={20} style={{marginLeft:"20px", marginRight:"10px"}} onClick={() => {
            setMapShow(true);
          }}></BsMap>
          <TbGridDots size={20}  onClick={() => {
            setMapShow(false);
          }}></TbGridDots>
        </SelectViewDiv>
      </SearchBarDiv>
    </LogViewDiv>
  );
}
const SelectViewDiv = styled.div`
  display: flex;
  justify-contet: space-between;
  align-items: center;
  height: 38px;
  padding: 0px 20px 0 20px;
`;
const LogViewDiv = styled.div`
  padding : 2% 10% 0 10%;
`;


export default SelectLogView;