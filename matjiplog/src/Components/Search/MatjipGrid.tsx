import styled from "styled-components";

import { EmptyCard } from "../Common/EmptyCard";
import MatjipCard from "./MatjipCard";

export interface IMatjipInfo {
  Location : string,
  RestaurantName : string,
  StarPoint : number,
}

function MatjipGrid() {
  const MatjipInfo: Array<IMatjipInfo> = [
    {
      Location : "대구시 달서구 이곡동",
      RestaurantName : "미친 돈가쓰",
      StarPoint : 4.5,
    },
    
  ];
  
  return(
    <MatjipWrap>
      {MatjipInfo.map((value: IMatjipInfo, index: number): JSX.Element =>{
        return <MatjipCard info={value} key={index} ></MatjipCard>
      })}
      {EmptyCard(MatjipInfo, "230")}
    </MatjipWrap>
  );
}

const MatjipWrap = styled.div`
  padding-top: 5%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 20px;
`;

export default MatjipGrid;