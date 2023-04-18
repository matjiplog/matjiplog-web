import { useEffect, useState } from "react";
import { axiosLogSearchMatjipName } from "../../../Services/log-service";
import { responseLogDto } from "../../../types/logDto";

export const useMatjipReview = () => {
  const [page, setPage ] = useState<number>(0);
  const [reviewList , setReviewList] = useState<responseLogDto>({totalPages : 0, totalElements : 0, data : []});
  

  const initReviewData = async (keyword: string, page: number) =>{
    await axiosLogSearchMatjipName(keyword, page).then( res => {
      if(reviewList.data.length === 0 || page===0) setReviewList(res)
      else setReviewList((prev) => ({...prev, data: [...prev.data, ...res.data]}));
    });
  }

  return { page, setPage, reviewList, initReviewData};
}

 