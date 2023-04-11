import { UseQueryResult, useQuery } from "react-query";
import { axiosLogSearchContent, axiosLogSearchMatjipAddress, axiosLogSearchMatjipName, axiosPublicLogList } from "../../../Services/log-service";
import { useState } from "react";
import { responseLogDto } from "../../../types/logDto";

export const useSelectList = (select : string) =>{
  const [page, setPage] = useState<number>(0);
  const [keyword, setKeword] = useState<string>("");

 

   // 공개된 로그 조회
  const publicList = useQuery(["loglist", "없음", page], () => axiosPublicLogList(page),{
    enabled: select==="없음",
    keepPreviousData: true 
  });

  // content로 로그 조회
  const contentList = useQuery(["loglist", "제목", keyword, page], () => axiosLogSearchContent(keyword, page),{ 
    enabled: select==="제목" && keyword!=="",
    keepPreviousData: true 
  });

  // 주소로 로그 조회
  const addressList = useQuery(["loglist", "지역", keyword, page], () => axiosLogSearchMatjipAddress(keyword, page),{
    enabled: select==="지역" && keyword!=="",
    keepPreviousData: true 
  });

  // 맛집이름으로 로그 조회
  const nameList = useQuery(["loglist", "맛집이름", keyword, page], () => axiosLogSearchMatjipName(keyword, page),{  
    enabled: select==="맛집이름" && keyword!=="",
    keepPreviousData: true
  });

  var query : UseQueryResult<responseLogDto, unknown> =  publicList;
  
  switch(select) {
    case "없음" :
      query = publicList;  
      break;
    case "제목" :
      query = contentList;  
      break;
    case "지역" :
      query = addressList;  
      break;
    case "맛집이름" :
      query = nameList;  
      break;
  }

  return { query , page, setPage, keyword, setKeword };
}