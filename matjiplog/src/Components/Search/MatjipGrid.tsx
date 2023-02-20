import { useEffect, useState } from "react";
import styled from "styled-components";

import { EmptyCard } from "../Common/EmptyCard";
import LodingSpinner from "../Common/Loding";
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

  const [loading, setLoading] = useState(true);

  // 로딩창 데이터불러온후 바꿈
  useEffect(() =>{
    setLoading(false);
  }, [])


  return(
    <>
      {loading ? <div style={{ marginTop: "150px"}}><LodingSpinner></LodingSpinner></div>
       : <MatjipWrap>
      {MatjipInfo.map((value: IMatjipInfo): JSX.Element =>{
        return <MatjipCard info={value} key={value.id}></MatjipCard>
      })}
      { EmptyCard(MatjipInfo, "230")}
      </MatjipWrap> }
    </>
  );
}

const MatjipWrap = styled.div`
  padding-top: 5%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 20px;
`;

export default MatjipGrid;