import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMatjipDetail } from "../Presentational/useMatjipDetail";
import { MatjipDto } from "../../../types/api/matjip";
import MatjipTop from "../Presentational/MatjipTop/MatjipTop";

function TopContainer() {
  const parm = useParams();
  const { data, isLoading, isError, isFetching } = useMatjipDetail(parm);
  const [ matjipInfo , setMatjipInfo] = useState<MatjipDto>();
  
  useEffect(() => {
    if(data && !isLoading){
      setMatjipInfo(data);
    }
  }, [data, isLoading, parm]);
  
  if(matjipInfo)
    return (
      <MatjipTop matjipInfo={matjipInfo}></MatjipTop>
    )
  else return <div>error</div>

}

export default TopContainer;