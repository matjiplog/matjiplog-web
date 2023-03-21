import styled from "styled-components";
import { BsMap } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";

import MyLogSearchBar from "./MyLogSearchBar";
// import { showLogStore } from "../../stores/mylog/store";



function SelectLogView() {
  // const { mapShow, setMapShow} = showLogStore();
  
  return(
    <LogViewDiv>
      {/* <MylogTopDiv>
        {mapShow ? <MyLogSearchBar visible="hidden"></MyLogSearchBar>:
          <MyLogSearchBar visible="inherit"></MyLogSearchBar>}
        <SelectViewDiv>
          <MapIcon size={23}  on={mapShow.toString()} onClick={() => {
            setMapShow(true);
          }}></MapIcon>
          <GridIcon size={20}  on={mapShow.toString()} onClick={() => {
            setMapShow(false);
          }}></GridIcon>
        </SelectViewDiv>
      </MylogTopDiv> */}
    </LogViewDiv>
  );
}
const MapIcon = styled(BsMap)< { on:string } >`
  margin : 0px 20px 0 20px;
  cursor: pointer;
  color: ${(props) => props.on === "true" ? "#ff6701" : "black"};
`;
const GridIcon = styled(TbGridDots)< { on:string } >`
  cursor: pointer;
  color: ${(props) => props.on === "true" ? "black" : "#ff6701"};
`;

const MylogTopDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
`;
const SelectViewDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  padding: 0 0 0 5em;
`;
const LogViewDiv = styled.div`
  padding : 2% 10% 0 10%;
`;


export default SelectLogView;