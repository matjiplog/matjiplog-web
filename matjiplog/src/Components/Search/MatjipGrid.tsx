import styled from "styled-components";

import { EmptyCard } from "../Common/EmptyCard";
import MatjipCard from "./MatjipCard";

export interface IMatjipInfo {
  id : number,
  Location : string,
  RestaurantName : string,
  StarPoint : number,
}
function MatjipGrid() {
  const MatjipInfo: Array<IMatjipInfo> = [
    {
      id : 1,
      Location : "대구시 달서구 이곡동",
      RestaurantName : "미친 돈가스",
      StarPoint : 4.5,
    },
    {
      id : 2,
      Location : "대구시 달서구 이곡동",
      RestaurantName : "미친 돈가쓰",
      StarPoint : 4.0,
    },
  ];
  
  return(
    <MatjipWrap>
      {MatjipInfo.map((value: IMatjipInfo): JSX.Element =>{
        return <MatjipCard info={value} key={value.id.toString()}></MatjipCard>
      })}
      { EmptyCard(MatjipInfo, "230")}
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