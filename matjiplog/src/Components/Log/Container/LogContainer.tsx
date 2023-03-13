import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { axiosPublicLogList } from "../../../Services/log-service";
import { logDto } from "../../../types/logDto";
import { EmptyCard } from "../../Common/EmptyCard";
import LogCard from "../Presentational/LogCard/LogCard";
import { LogGrid } from "./style";

function LogContainer() {
  const scrollRef = useRef();
  const [page, setPage] = useState<number>(0);
  const { data, isLoading, isError, isFetching } = useQuery(["loglist", page], () => axiosPublicLogList(page));
  const [logList , setLogList] = useState<logDto[]>([]);

  useEffect(() =>{
    if(data && !isLoading){
      setLogList((list) => [...list, ...data]);
    }
  }, [data, isLoading, page])
  
  return(
    <LogGrid>
      {logList.map((value : logDto): JSX.Element =>{
        return <LogCard logInfo={value} key={value.matjip_sequence}  ></LogCard>
      })}
      {EmptyCard(logList, "375")}
    </LogGrid>
  );
}

export default LogContainer;