import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMatjipDetail } from "../Presentational/useMatjipDetail";
import { MatjipDto } from "../../../types/api/matjip";
import MatjipTop from "../Presentational/MatjipTop/MatjipTop";

function TopContainer() {
  const parm = useParams();
  const { data, isLoading, isError, isFetching } = useMatjipDetail(parm);
  
  const windowOpenKakaoLoadFind = () =>{
    window.open(`https://map.kakao.com/link/to/${data?.name},${data?.locationLatitude},${data?.locationLongitude}`, "_blank");
  }

  if(data)
    return (
      <MatjipTop matjipInfo={data} windowOpenKakaoLoadFind={windowOpenKakaoLoadFind}></MatjipTop>
    )
  else return <div>error</div>

}

export default TopContainer;